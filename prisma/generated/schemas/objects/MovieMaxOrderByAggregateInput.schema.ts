import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    release_year: z.lazy(() => SortOrderSchema).optional(),
    featured_image: z.lazy(() => SortOrderSchema).optional(),
    thumb_image: z.lazy(() => SortOrderSchema).optional(),
    synopsis: z.lazy(() => SortOrderSchema).optional(),
    rental_value: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    category_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const MovieMaxOrderByAggregateInputObjectSchema = Schema;
