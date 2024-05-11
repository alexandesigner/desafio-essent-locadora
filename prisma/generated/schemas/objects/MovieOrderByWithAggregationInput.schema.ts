import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MovieCountOrderByAggregateInputObjectSchema } from './MovieCountOrderByAggregateInput.schema';
import { MovieAvgOrderByAggregateInputObjectSchema } from './MovieAvgOrderByAggregateInput.schema';
import { MovieMaxOrderByAggregateInputObjectSchema } from './MovieMaxOrderByAggregateInput.schema';
import { MovieMinOrderByAggregateInputObjectSchema } from './MovieMinOrderByAggregateInput.schema';
import { MovieSumOrderByAggregateInputObjectSchema } from './MovieSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    release_year: z.lazy(() => SortOrderSchema).optional(),
    featured_image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    thumb_image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    synopsis: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    rental_value: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    category_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MovieCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MovieAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MovieMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MovieMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MovieSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict();

export const MovieOrderByWithAggregationInputObjectSchema = Schema;
