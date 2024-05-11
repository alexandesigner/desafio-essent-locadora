import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MovieCastOrderByRelationAggregateInputObjectSchema } from './MovieCastOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    avatar: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    cast: z
      .lazy(() => MovieCastOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict();

export const MoviePersonOrderByWithRelationInputObjectSchema = Schema;
