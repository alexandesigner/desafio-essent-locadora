import { errorResponse, successResponse } from '@/lib/response';
import { PersonService } from '@/service/person';
import { validateToken } from '@/lib/token';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');
    let response;
    if (token) {
      const decoded = await validateToken(token);
      if (decoded?.id) {
        response = await PersonService.getPersonById(+decoded?.id);
        return successResponse(response, 'Person logged successfully', 200);
      } else {
        return errorResponse('Invalid token', 403);
      }
    }
    return errorResponse('Unauthorized', 401);
  } catch (err: any) {
    const jwtExpired = (err as any)?.message === 'jwt expired';
    jwtExpired ? ('Sessão expirada!', 401) : ((err as any)?.message, 400);
    return errorResponse(jwtExpired);
  }
}
