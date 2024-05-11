import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RentalCountOrderByAggregateInputObjectSchema } from './RentalCountOrderByAggregateInput.schema';
import { RentalAvgOrderByAggregateInputObjectSchema } from './RentalAvgOrderByAggregateInput.schema';
import { RentalMaxOrderByAggregateInputObjectSchema } from './RentalMaxOrderByAggregateInput.schema';
import { RentalMinOrderByAggregateInputObjectSchema } from './RentalMinOrderByAggregateInput.schema';
import { RentalSumOrderByAggregateInputObjectSchema } from './RentalSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    withdrawal_at: z.lazy(() => SortOrderSchema).optional(),
    delivery_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    due_at: z.lazy(() => SortOrderSchema).optional(),
    late_fee: z.lazy(() => SortOrderSchema).optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    renter_id: z.lazy(() => SortOrderSchema).optional(),
    movie_stock_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RentalCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RentalAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RentalMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RentalMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RentalSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict();

export const RentalOrderByWithAggregationInputObjectSchema = Schema;
