import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PersonCountOrderByAggregateInputObjectSchema } from './PersonCountOrderByAggregateInput.schema';
import { PersonAvgOrderByAggregateInputObjectSchema } from './PersonAvgOrderByAggregateInput.schema';
import { PersonMaxOrderByAggregateInputObjectSchema } from './PersonMaxOrderByAggregateInput.schema';
import { PersonMinOrderByAggregateInputObjectSchema } from './PersonMinOrderByAggregateInput.schema';
import { PersonSumOrderByAggregateInputObjectSchema } from './PersonSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    avatar: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    is_verified: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PersonCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PersonAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PersonMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PersonMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PersonSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict();

export const PersonOrderByWithAggregationInputObjectSchema = Schema;
