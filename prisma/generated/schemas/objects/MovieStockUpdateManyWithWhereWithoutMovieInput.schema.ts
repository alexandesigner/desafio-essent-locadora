import { z } from 'zod';
import { MovieStockScalarWhereInputObjectSchema } from './MovieStockScalarWhereInput.schema';
import { MovieStockUpdateManyMutationInputObjectSchema } from './MovieStockUpdateManyMutationInput.schema';
import { MovieStockUncheckedUpdateManyWithoutStockInputObjectSchema } from './MovieStockUncheckedUpdateManyWithoutStockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpdateManyWithWhereWithoutMovieInput> =
  z
    .object({
      where: z.lazy(() => MovieStockScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MovieStockUpdateManyMutationInputObjectSchema),
        z.lazy(() => MovieStockUncheckedUpdateManyWithoutStockInputObjectSchema)
      ])
    })
    .strict();

export const MovieStockUpdateManyWithWhereWithoutMovieInputObjectSchema =
  Schema;
