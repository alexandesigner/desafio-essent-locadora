import { errorResponse, successResponse } from '@/lib/response';
import { MovieService } from '@/service/movie';
import { validateToken } from '@/lib/token';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const { id } = params;

    if (!id) return errorResponse('Movie person ID is required', 400);

    const response = await MovieService.getMoviePersonById(+id);

    return successResponse(response, 'Movie person details successfully', 200);
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

    const response = await MovieService.updateMoviePerson(+id);

    return successResponse(response, 'Movie person update successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
