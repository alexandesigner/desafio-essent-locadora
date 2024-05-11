import { errorResponse, successResponse } from '@/lib/response';
import { validateToken } from '@/lib/token';
import { MovieService } from '@/service/movie';

export async function POST(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const body = await req.json();

    const response = await MovieService.createMoviePersonMany(
      body.movieId,
      body.castData
    );

    return successResponse(
      response,
      'Movie person in Movie create successfully',
      200
    );
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
