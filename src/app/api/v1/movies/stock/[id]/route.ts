import { errorResponse, successResponse } from '@/lib/response';
import { MovieService } from '@/service/movie';
import { validateToken } from '@/lib/token';

export async function POST(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
    const token = req.headers.get('Authorization');
    const { id } = params;

    await validateToken(token);

    const response = await MovieService.addMovieStock(+id);

    return successResponse(response, 'Movie Stock update successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
