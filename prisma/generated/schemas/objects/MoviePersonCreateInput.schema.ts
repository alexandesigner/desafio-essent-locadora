import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';
import { MovieCastCreateNestedManyWithoutPersonInputObjectSchema } from './MovieCastCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonCreateInput> = z
  .object({
    type: z.lazy(() => MoviePersonTypeSchema),
    avatar: z.string().optional().nullable(),
    full_name: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    cast: z
      .lazy(() => MovieCastCreateNestedManyWithoutPersonInputObjectSchema)
      .optional()
  })
  .strict();

export const MoviePersonCreateInputObjectSchema = Schema;
