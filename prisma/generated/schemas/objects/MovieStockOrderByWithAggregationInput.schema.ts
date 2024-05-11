import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovieStockCountOrderByAggregateInputObjectSchema } from './MovieStockCountOrderByAggregateInput.schema';
import { MovieStockAvgOrderByAggregateInputObjectSchema } from './MovieStockAvgOrderByAggregateInput.schema';
import { MovieStockMaxOrderByAggregateInputObjectSchema } from './MovieStockMaxOrderByAggregateInput.schema';
import { MovieStockMinOrderByAggregateInputObjectSchema } from './MovieStockMinOrderByAggregateInput.schema';
import { MovieStockSumOrderByAggregateInputObjectSchema } from './MovieStockSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    movie_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MovieStockCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MovieStockAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MovieStockMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MovieStockMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MovieStockSumOrderByAggregateInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieStockOrderByWithAggregationInputObjectSchema = Schema;
