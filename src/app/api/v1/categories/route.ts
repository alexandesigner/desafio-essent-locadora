import { errorResponse, successResponse } from '@/lib/response';
import { validateToken } from '@/lib/token';
import { CategoryService } from '@/service/category';

export async function GET(req: Request) {
  try {
    const { getCategories } = CategoryService;
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    const response = await getCategories(name);

    return successResponse(
      response,
      'Categories listing fetched successfully',
      200
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

    const response = await CategoryService.createCategory(body);

    return successResponse(response, 'Category create successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
