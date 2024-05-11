import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastCreateWithoutMovieInputObjectSchema } from './MovieCastCreateWithoutMovieInput.schema';
import { MovieCastUncheckedCreateWithoutMovieInputObjectSchema } from './MovieCastUncheckedCreateWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateOrConnectWithoutMovieInput> = z
  .object({
    where: z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieCastCreateWithoutMovieInputObjectSchema),
      z.lazy(() => MovieCastUncheckedCreateWithoutMovieInputObjectSchema)
    ])
  })
  .strict();

export const MovieCastCreateOrConnectWithoutMovieInputObjectSchema = Schema;
