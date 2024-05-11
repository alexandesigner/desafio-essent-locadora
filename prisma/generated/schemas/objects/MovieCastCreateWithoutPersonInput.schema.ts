import { z } from 'zod';
import { MovieCreateNestedOneWithoutCastInputObjectSchema } from './MovieCreateNestedOneWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateWithoutPersonInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    movie: z.lazy(() => MovieCreateNestedOneWithoutCastInputObjectSchema)
  })
  .strict();

export const MovieCastCreateWithoutPersonInputObjectSchema = Schema;
