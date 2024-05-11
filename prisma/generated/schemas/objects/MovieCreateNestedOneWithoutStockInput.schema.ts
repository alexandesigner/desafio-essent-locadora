import { z } from 'zod';
import { MovieCreateWithoutStockInputObjectSchema } from './MovieCreateWithoutStockInput.schema';
import { MovieUncheckedCreateWithoutStockInputObjectSchema } from './MovieUncheckedCreateWithoutStockInput.schema';
import { MovieCreateOrConnectWithoutStockInputObjectSchema } from './MovieCreateOrConnectWithoutStockInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateNestedOneWithoutStockInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MovieCreateWithoutStockInputObjectSchema),
        z.lazy(() => MovieUncheckedCreateWithoutStockInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MovieCreateOrConnectWithoutStockInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MovieWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const MovieCreateNestedOneWithoutStockInputObjectSchema = Schema;
