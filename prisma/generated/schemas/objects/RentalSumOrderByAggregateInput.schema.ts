import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    late_fee: z.lazy(() => SortOrderSchema).optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    renter_id: z.lazy(() => SortOrderSchema).optional(),
    movie_stock_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const RentalSumOrderByAggregateInputObjectSchema = Schema;
