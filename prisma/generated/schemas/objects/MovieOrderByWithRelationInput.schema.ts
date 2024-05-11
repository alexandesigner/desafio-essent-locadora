import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { MovieCastOrderByRelationAggregateInputObjectSchema } from './MovieCastOrderByRelationAggregateInput.schema';
import { MovieStockOrderByRelationAggregateInputObjectSchema } from './MovieStockOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieOrderByWithRelationInput> = z
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
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    cast: z
      .lazy(() => MovieCastOrderByRelationAggregateInputObjectSchema)
      .optional(),
    stock: z
      .lazy(() => MovieStockOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieOrderByWithRelationInputObjectSchema = Schema;
