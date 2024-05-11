import { errorResponse, successResponse } from '@/lib/response';
import { validateToken } from '@/lib/token';
import { MovieService } from '@/service/movie';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const paginate = { page: Number(page) || 1, limit: Number(limit) || 10 };

    const query = {
      include: {
        category: {
          select: {
            id: true,
            name: true
          }
        },
        stock: true,
        cast: true
      }
    };

    const { content, pagination } = await MovieService.getAllMovies(
      paginate,
      query
    );

    return successResponse(
      content,
      'Movies listing fetched successfully',
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

    const response = await MovieService.createMovie(body);

    return successResponse(response, 'Movie create successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
