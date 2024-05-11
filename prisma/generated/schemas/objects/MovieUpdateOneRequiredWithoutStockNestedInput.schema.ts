import { z } from 'zod';
import { MovieCreateWithoutStockInputObjectSchema } from './MovieCreateWithoutStockInput.schema';
import { MovieUncheckedCreateWithoutStockInputObjectSchema } from './MovieUncheckedCreateWithoutStockInput.schema';
import { MovieCreateOrConnectWithoutStockInputObjectSchema } from './MovieCreateOrConnectWithoutStockInput.schema';
import { MovieUpsertWithoutStockInputObjectSchema } from './MovieUpsertWithoutStockInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieUpdateWithoutStockInputObjectSchema } from './MovieUpdateWithoutStockInput.schema';
import { MovieUncheckedUpdateWithoutStockInputObjectSchema } from './MovieUncheckedUpdateWithoutStockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpdateOneRequiredWithoutStockNestedInput> =
  z
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
      upsert: z.lazy(() => MovieUpsertWithoutStockInputObjectSchema).optional(),
      connect: z.lazy(() => MovieWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MovieUpdateWithoutStockInputObjectSchema),
          z.lazy(() => MovieUncheckedUpdateWithoutStockInputObjectSchema)
        ])
        .optional()
    })
    .strict();

export const MovieUpdateOneRequiredWithoutStockNestedInputObjectSchema = Schema;
