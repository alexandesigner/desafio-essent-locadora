import { db } from '@/lib/db';
import { errorResponse, successResponse } from '@/lib/response';
import { generateToken } from '@/lib/token';
import { CreatePersonInputValidation } from '@/lib/validations';
import { hash } from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, full_name, password } = body;

    const inputValidation = CreatePersonInputValidation.safeParse(body);

    if (!inputValidation.success) {
      return errorResponse(
        'Input validation failed',
        400,
        inputValidation.error
      );
    }

    const existingPerson = await db.person.findUnique({
      where: {
        email
      }
    });

    if (existingPerson) {
      return errorResponse('Person with this email already exists', 400);
    }

    const hashedPersonPassword = await hash(password, 10);

    const newPerson = await db.person.create({
      data: {
        email,
        full_name,
        is_verified: false,
        password: hashedPersonPassword,
        type: 'CLIENT'
      }
    });

    const token = await generateToken(email, password);

    const person = {
      id: newPerson.id,
      email: newPerson.email,
      full_name: newPerson.full_name,
      type: newPerson.type
    };

    const response = {
      ...person,
      token
    };

    return successResponse(
      response,
      'Person created successfully, kindly proceed to login',
      201
    );
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
