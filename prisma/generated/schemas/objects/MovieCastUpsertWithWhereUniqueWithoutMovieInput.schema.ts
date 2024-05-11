import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastUpdateWithoutMovieInputObjectSchema } from './MovieCastUpdateWithoutMovieInput.schema';
import { MovieCastUncheckedUpdateWithoutMovieInputObjectSchema } from './MovieCastUncheckedUpdateWithoutMovieInput.schema';
import { MovieCastCreateWithoutMovieInputObjectSchema } from './MovieCastCreateWithoutMovieInput.schema';
import { MovieCastUncheckedCreateWithoutMovieInputObjectSchema } from './MovieCastUncheckedCreateWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUpsertWithWhereUniqueWithoutMovieInput> =
  z
    .object({
      where: z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MovieCastUpdateWithoutMovieInputObjectSchema),
        z.lazy(() => MovieCastUncheckedUpdateWithoutMovieInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => MovieCastCreateWithoutMovieInputObjectSchema),
        z.lazy(() => MovieCastUncheckedCreateWithoutMovieInputObjectSchema)
      ])
    })
    .strict();

export const MovieCastUpsertWithWhereUniqueWithoutMovieInputObjectSchema =
  Schema;
