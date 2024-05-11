import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';
import { MovieStockUpdateWithoutMovieInputObjectSchema } from './MovieStockUpdateWithoutMovieInput.schema';
import { MovieStockUncheckedUpdateWithoutMovieInputObjectSchema } from './MovieStockUncheckedUpdateWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpdateWithWhereUniqueWithoutMovieInput> =
  z
    .object({
      where: z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MovieStockUpdateWithoutMovieInputObjectSchema),
        z.lazy(() => MovieStockUncheckedUpdateWithoutMovieInputObjectSchema)
      ])
    })
    .strict();

export const MovieStockUpdateWithWhereUniqueWithoutMovieInputObjectSchema =
  Schema;
