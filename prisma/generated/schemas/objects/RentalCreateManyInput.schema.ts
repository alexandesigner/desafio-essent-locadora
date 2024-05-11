import { z } from 'zod';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateManyInput> = z
  .object({
    id: z.number().optional(),
    withdrawal_at: z.coerce.date().optional(),
    delivery_at: z.coerce.date().optional().nullable(),
    due_at: z.coerce.date(),
    late_fee: z.number(),
    total_amount: z.number(),
    status: z.lazy(() => RentalStatusSchema),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    renter_id: z.number(),
    movie_stock_id: z.number()
  })
  .strict();

export const RentalCreateManyInputObjectSchema = Schema;
