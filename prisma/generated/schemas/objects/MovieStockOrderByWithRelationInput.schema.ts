import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovieOrderByWithRelationInputObjectSchema } from './MovieOrderByWithRelationInput.schema';
import { RentalOrderByRelationAggregateInputObjectSchema } from './RentalOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    movie_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    movie: z.lazy(() => MovieOrderByWithRelationInputObjectSchema).optional(),
    rentals: z
      .lazy(() => RentalOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieStockOrderByWithRelationInputObjectSchema = Schema;
