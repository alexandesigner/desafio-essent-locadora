import { db } from '@/lib/db';
import { errorResponse, successResponse } from '@/lib/response';
import { generateToken } from '@/lib/token';
import { LoginPersonInputValidation } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const inputValidation = LoginPersonInputValidation.safeParse(body);

    if (!inputValidation.success) {
      return errorResponse(
        'Input validation failed',
        400,
        inputValidation.error
      );
    }

    const existingUser = await db.person.findUnique({
      where: {
        email
      }
    });

    if (!existingUser) {
      return errorResponse('User with this email does not exist', 400);
    }

    const token = await generateToken(email, password);

    const person = {
      id: existingUser.id,
      email: existingUser.email,
      full_name: existingUser.full_name,
      type: existingUser.type
    };

    const response = {
      ...person,
      token
    };

    return successResponse(response, 'User login successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
