import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieCreateWithoutStockInputObjectSchema } from './MovieCreateWithoutStockInput.schema';
import { MovieUncheckedCreateWithoutStockInputObjectSchema } from './MovieUncheckedCreateWithoutStockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateOrConnectWithoutStockInput> = z
  .object({
    where: z.lazy(() => MovieWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieCreateWithoutStockInputObjectSchema),
      z.lazy(() => MovieUncheckedCreateWithoutStockInputObjectSchema)
    ])
  })
  .strict();

export const MovieCreateOrConnectWithoutStockInputObjectSchema = Schema;
