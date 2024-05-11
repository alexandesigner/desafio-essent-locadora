import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    late_fee: z.literal(true).optional(),
    total_amount: z.literal(true).optional(),
    renter_id: z.literal(true).optional(),
    movie_stock_id: z.literal(true).optional()
  })
  .strict();

export const RentalAvgAggregateInputObjectSchema = Schema;
