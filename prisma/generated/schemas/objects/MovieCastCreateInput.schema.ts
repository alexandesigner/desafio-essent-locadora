import { z } from 'zod';
import { MovieCreateNestedOneWithoutCastInputObjectSchema } from './MovieCreateNestedOneWithoutCastInput.schema';
import { MoviePersonCreateNestedOneWithoutCastInputObjectSchema } from './MoviePersonCreateNestedOneWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    movie: z.lazy(() => MovieCreateNestedOneWithoutCastInputObjectSchema),
    person: z.lazy(() => MoviePersonCreateNestedOneWithoutCastInputObjectSchema)
  })
  .strict();

export const MovieCastCreateInputObjectSchema = Schema;
