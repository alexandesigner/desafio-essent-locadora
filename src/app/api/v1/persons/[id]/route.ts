import { errorResponse, successResponse } from '@/lib/response';
import { PersonService } from '@/service/person';
import { validateToken } from '@/lib/token';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const { id } = params;

    if (!id) return errorResponse('Person ID is required', 400);

    const response = await PersonService.getPersonById(+id);

    return successResponse(response, 'Person details successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
    const token = req.headers.get('Authorization');
    const { id } = params;

    await validateToken(token);

    const body = await req.json();

    const response = await PersonService.updatePerson(+id, body);

    return successResponse(response, 'Person update successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
