import { errorResponse, successResponse } from '@/lib/response';
import { validateToken } from '@/lib/token';
import { RentalService } from '@/service/rental';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    await validateToken(token);

    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const paginate = { page: Number(page) || 1, limit: Number(limit) || 10 };

    const query = {
      include: {
        movie_stock: {
          select: {
            id: true,
            movie: {
              select: {
                id: true,
                title: true
              }
            }
          }
        },
        renter: {
          select: {
            id: true,
            avatar: true,
            full_name: true,
            email: true,
            type: true
          }
        }
      }
    };

    const { content, pagination } = await RentalService.getAllRentals(
      paginate,
      query
    );

    return successResponse(
      content,
      'Rentals listing fetched successfully',
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

    const response = await RentalService.createRental(body);

    return successResponse(response, 'Rental create successfully', 200);
  } catch (err: any) {
    return errorResponse((err as any)?.message, 400);
  }
}
