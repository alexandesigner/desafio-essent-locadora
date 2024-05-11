import { z } from 'zod';
import { MovieStockCreateWithoutRentalsInputObjectSchema } from './MovieStockCreateWithoutRentalsInput.schema';
import { MovieStockUncheckedCreateWithoutRentalsInputObjectSchema } from './MovieStockUncheckedCreateWithoutRentalsInput.schema';
import { MovieStockCreateOrConnectWithoutRentalsInputObjectSchema } from './MovieStockCreateOrConnectWithoutRentalsInput.schema';
import { MovieStockUpsertWithoutRentalsInputObjectSchema } from './MovieStockUpsertWithoutRentalsInput.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';
import { MovieStockUpdateWithoutRentalsInputObjectSchema } from './MovieStockUpdateWithoutRentalsInput.schema';
import { MovieStockUncheckedUpdateWithoutRentalsInputObjectSchema } from './MovieStockUncheckedUpdateWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpdateOneRequiredWithoutRentalsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MovieStockCreateWithoutRentalsInputObjectSchema),
          z.lazy(() => MovieStockUncheckedCreateWithoutRentalsInputObjectSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MovieStockCreateOrConnectWithoutRentalsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MovieStockUpsertWithoutRentalsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MovieStockWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MovieStockUpdateWithoutRentalsInputObjectSchema),
          z.lazy(() => MovieStockUncheckedUpdateWithoutRentalsInputObjectSchema)
        ])
        .optional()
    })
    .strict();

export const MovieStockUpdateOneRequiredWithoutRentalsNestedInputObjectSchema =
  Schema;
