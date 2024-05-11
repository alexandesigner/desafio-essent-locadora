import { errorResponse, successResponse } from '@/lib/response';
import { CategoryService } from '@/service/category';
import { validateToken } from '@/lib/token';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const { id } = params;

    if (!id) return errorResponse('Category ID is required', 400);

    const response = await CategoryService.getCategoryById(+id);

    return successResponse(response, 'Category details successfully', 200);
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

    const response = await CategoryService.updateCategory(+id, body);

    return successResponse(response, 'Category update successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
