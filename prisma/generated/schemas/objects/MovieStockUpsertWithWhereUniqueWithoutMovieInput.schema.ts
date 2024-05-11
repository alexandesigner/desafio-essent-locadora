import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';
import { MovieStockUpdateWithoutMovieInputObjectSchema } from './MovieStockUpdateWithoutMovieInput.schema';
import { MovieStockUncheckedUpdateWithoutMovieInputObjectSchema } from './MovieStockUncheckedUpdateWithoutMovieInput.schema';
import { MovieStockCreateWithoutMovieInputObjectSchema } from './MovieStockCreateWithoutMovieInput.schema';
import { MovieStockUncheckedCreateWithoutMovieInputObjectSchema } from './MovieStockUncheckedCreateWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpsertWithWhereUniqueWithoutMovieInput> =
  z
    .object({
      where: z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MovieStockUpdateWithoutMovieInputObjectSchema),
        z.lazy(() => MovieStockUncheckedUpdateWithoutMovieInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => MovieStockCreateWithoutMovieInputObjectSchema),
        z.lazy(() => MovieStockUncheckedCreateWithoutMovieInputObjectSchema)
      ])
    })
    .strict();

export const MovieStockUpsertWithWhereUniqueWithoutMovieInputObjectSchema =
  Schema;
