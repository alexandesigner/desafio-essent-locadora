import { z } from 'zod';

export const RentalScalarFieldEnumSchema = z.enum([
  'id',
  'withdrawal_at',
  'delivery_at',
  'due_at',
  'late_fee',
  'total_amount',
  'status',
  'created_at',
  'updated_at',
  'renter_id',
  'movie_stock_id'
]);
