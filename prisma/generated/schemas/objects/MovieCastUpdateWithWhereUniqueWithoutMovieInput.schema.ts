import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastUpdateWithoutMovieInputObjectSchema } from './MovieCastUpdateWithoutMovieInput.schema';
import { MovieCastUncheckedUpdateWithoutMovieInputObjectSchema } from './MovieCastUncheckedUpdateWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUpdateWithWhereUniqueWithoutMovieInput> =
  z
    .object({
      where: z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MovieCastUpdateWithoutMovieInputObjectSchema),
        z.lazy(() => MovieCastUncheckedUpdateWithoutMovieInputObjectSchema)
      ])
    })
    .strict();

export const MovieCastUpdateWithWhereUniqueWithoutMovieInputObjectSchema =
  Schema;
