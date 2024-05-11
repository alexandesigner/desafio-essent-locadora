import { errorResponse, successResponse } from '@/lib/response';
import { validateToken } from '@/lib/token';
import { PersonService } from '@/service/person';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const paginate = { page: Number(page) || 1, limit: Number(limit) || 10 };

    const { content, pagination } = await PersonService.getAllPersons(paginate);

    return successResponse(
      content,
      'Persons listing fetched successfully',
      200,
      pagination
    );
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const body = await req.json();

    const response = await PersonService.createPerson(body);

    return successResponse(response, 'Person create successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
