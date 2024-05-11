import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';
import { MovieStockCreateWithoutMovieInputObjectSchema } from './MovieStockCreateWithoutMovieInput.schema';
import { MovieStockUncheckedCreateWithoutMovieInputObjectSchema } from './MovieStockUncheckedCreateWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateOrConnectWithoutMovieInput> = z
  .object({
    where: z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieStockCreateWithoutMovieInputObjectSchema),
      z.lazy(() => MovieStockUncheckedCreateWithoutMovieInputObjectSchema)
    ])
  })
  .strict();

export const MovieStockCreateOrConnectWithoutMovieInputObjectSchema = Schema;
