import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';
import { MovieStockCreateWithoutRentalsInputObjectSchema } from './MovieStockCreateWithoutRentalsInput.schema';
import { MovieStockUncheckedCreateWithoutRentalsInputObjectSchema } from './MovieStockUncheckedCreateWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateOrConnectWithoutRentalsInput> = z
  .object({
    where: z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieStockCreateWithoutRentalsInputObjectSchema),
      z.lazy(() => MovieStockUncheckedCreateWithoutRentalsInputObjectSchema)
    ])
  })
  .strict();

export const MovieStockCreateOrConnectWithoutRentalsInputObjectSchema = Schema;
