import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    withdrawal_at: z.lazy(() => SortOrderSchema).optional(),
    delivery_at: z.lazy(() => SortOrderSchema).optional(),
    due_at: z.lazy(() => SortOrderSchema).optional(),
    late_fee: z.lazy(() => SortOrderSchema).optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    renter_id: z.lazy(() => SortOrderSchema).optional(),
    movie_stock_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const RentalMinOrderByAggregateInputObjectSchema = Schema;
