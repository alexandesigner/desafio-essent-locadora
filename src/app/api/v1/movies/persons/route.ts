import { errorResponse, successResponse } from '@/lib/response';
import { validateToken } from '@/lib/token';
import { MovieService } from '@/service/movie';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const paginate = { page: Number(page) || 1, limit: Number(limit) || 10 };

    const response = await MovieService.getAllMoviePerson();

    let query = {};

    const { content, pagination } = await MovieService.getAllMoviePerson(
      paginate,
      query
    );

    return successResponse(
      content,
      'Movie person details successfully',
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

    const response = await MovieService.createMoviePerson(body);

    return successResponse(response, 'Movie person create successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
