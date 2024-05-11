import { z } from 'zod';
import { MovieStockUpdateWithoutRentalsInputObjectSchema } from './MovieStockUpdateWithoutRentalsInput.schema';
import { MovieStockUncheckedUpdateWithoutRentalsInputObjectSchema } from './MovieStockUncheckedUpdateWithoutRentalsInput.schema';
import { MovieStockCreateWithoutRentalsInputObjectSchema } from './MovieStockCreateWithoutRentalsInput.schema';
import { MovieStockUncheckedCreateWithoutRentalsInputObjectSchema } from './MovieStockUncheckedCreateWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpsertWithoutRentalsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MovieStockUpdateWithoutRentalsInputObjectSchema),
      z.lazy(() => MovieStockUncheckedUpdateWithoutRentalsInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => MovieStockCreateWithoutRentalsInputObjectSchema),
      z.lazy(() => MovieStockUncheckedCreateWithoutRentalsInputObjectSchema)
    ])
  })
  .strict();

export const MovieStockUpsertWithoutRentalsInputObjectSchema = Schema;
