import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    withdrawal_at: z.literal(true).optional(),
    delivery_at: z.literal(true).optional(),
    due_at: z.literal(true).optional(),
    late_fee: z.literal(true).optional(),
    total_amount: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    renter_id: z.literal(true).optional(),
    movie_stock_id: z.literal(true).optional()
  })
  .strict();

export const RentalMinAggregateInputObjectSchema = Schema;
