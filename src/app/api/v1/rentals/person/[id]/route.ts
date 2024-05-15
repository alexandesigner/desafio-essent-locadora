import { errorResponse, successResponse } from '@/lib/response';
import { RentalService } from '@/service/rental';
import { validateToken } from '@/lib/token';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = req.headers.get('Authorization');

    const person = validateToken(token);

    const { id } = params;

    if (!id) return errorResponse('Rental ID is required', 400);

    const response = await RentalService.getMyRentalById(person?.id, +id);

    return successResponse(response, 'My Rental details successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
