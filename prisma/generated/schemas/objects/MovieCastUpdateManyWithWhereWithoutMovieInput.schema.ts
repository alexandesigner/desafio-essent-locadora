import { z } from 'zod';
import { MovieCastScalarWhereInputObjectSchema } from './MovieCastScalarWhereInput.schema';
import { MovieCastUpdateManyMutationInputObjectSchema } from './MovieCastUpdateManyMutationInput.schema';
import { MovieCastUncheckedUpdateManyWithoutCastInputObjectSchema } from './MovieCastUncheckedUpdateManyWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUpdateManyWithWhereWithoutMovieInput> =
  z
    .object({
      where: z.lazy(() => MovieCastScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MovieCastUpdateManyMutationInputObjectSchema),
        z.lazy(() => MovieCastUncheckedUpdateManyWithoutCastInputObjectSchema)
      ])
    })
    .strict();

export const MovieCastUpdateManyWithWhereWithoutMovieInputObjectSchema = Schema;
