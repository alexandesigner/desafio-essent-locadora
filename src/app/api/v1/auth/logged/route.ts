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
      }
      return errorResponse('Invalid token', 401);
    }
    return errorResponse('Unauthorized', 401);
  } catch (err: any) {
    const hasExpired = err?.message === 'jwt expired';
    if (typeof window !== 'undefined' && hasExpired) {
      window.localStorage.removeItem('USER_TOKEN');
    }
    return hasExpired
      ? errorResponse('Session expired!', 401)
      : errorResponse((err as any)?.message, 400);
  }
}
