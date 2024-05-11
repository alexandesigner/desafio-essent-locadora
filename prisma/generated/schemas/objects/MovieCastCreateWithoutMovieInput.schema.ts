import { z } from 'zod';
import { MoviePersonCreateNestedOneWithoutCastInputObjectSchema } from './MoviePersonCreateNestedOneWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateWithoutMovieInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    person: z.lazy(() => MoviePersonCreateNestedOneWithoutCastInputObjectSchema)
  })
  .strict();

export const MovieCastCreateWithoutMovieInputObjectSchema = Schema;
