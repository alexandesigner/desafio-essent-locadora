import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovieOrderByWithRelationInputObjectSchema } from './MovieOrderByWithRelationInput.schema';
import { MoviePersonOrderByWithRelationInputObjectSchema } from './MoviePersonOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    movie_id: z.lazy(() => SortOrderSchema).optional(),
    person_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    movie: z.lazy(() => MovieOrderByWithRelationInputObjectSchema).optional(),
    person: z
      .lazy(() => MoviePersonOrderByWithRelationInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieCastOrderByWithRelationInputObjectSchema = Schema;
