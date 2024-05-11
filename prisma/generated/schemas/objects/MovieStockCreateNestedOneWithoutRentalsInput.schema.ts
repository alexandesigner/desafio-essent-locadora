import { z } from 'zod';
import { MovieStockCreateWithoutRentalsInputObjectSchema } from './MovieStockCreateWithoutRentalsInput.schema';
import { MovieStockUncheckedCreateWithoutRentalsInputObjectSchema } from './MovieStockUncheckedCreateWithoutRentalsInput.schema';
import { MovieStockCreateOrConnectWithoutRentalsInputObjectSchema } from './MovieStockCreateOrConnectWithoutRentalsInput.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateNestedOneWithoutRentalsInput> = z
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
    connect: z.lazy(() => MovieStockWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const MovieStockCreateNestedOneWithoutRentalsInputObjectSchema = Schema;
