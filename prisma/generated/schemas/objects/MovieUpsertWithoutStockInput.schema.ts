import { z } from 'zod';
import { MovieUpdateWithoutStockInputObjectSchema } from './MovieUpdateWithoutStockInput.schema';
import { MovieUncheckedUpdateWithoutStockInputObjectSchema } from './MovieUncheckedUpdateWithoutStockInput.schema';
import { MovieCreateWithoutStockInputObjectSchema } from './MovieCreateWithoutStockInput.schema';
import { MovieUncheckedCreateWithoutStockInputObjectSchema } from './MovieUncheckedCreateWithoutStockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpsertWithoutStockInput> = z
  .object({
    update: z.union([
      z.lazy(() => MovieUpdateWithoutStockInputObjectSchema),
      z.lazy(() => MovieUncheckedUpdateWithoutStockInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => MovieCreateWithoutStockInputObjectSchema),
      z.lazy(() => MovieUncheckedCreateWithoutStockInputObjectSchema)
    ])
  })
  .strict();

export const MovieUpsertWithoutStockInputObjectSchema = Schema;
