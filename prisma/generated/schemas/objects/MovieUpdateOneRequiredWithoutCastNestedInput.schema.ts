import { z } from 'zod';
import { MovieCreateWithoutCastInputObjectSchema } from './MovieCreateWithoutCastInput.schema';
import { MovieUncheckedCreateWithoutCastInputObjectSchema } from './MovieUncheckedCreateWithoutCastInput.schema';
import { MovieCreateOrConnectWithoutCastInputObjectSchema } from './MovieCreateOrConnectWithoutCastInput.schema';
import { MovieUpsertWithoutCastInputObjectSchema } from './MovieUpsertWithoutCastInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieUpdateWithoutCastInputObjectSchema } from './MovieUpdateWithoutCastInput.schema';
import { MovieUncheckedUpdateWithoutCastInputObjectSchema } from './MovieUncheckedUpdateWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpdateOneRequiredWithoutCastNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MovieCreateWithoutCastInputObjectSchema),
        z.lazy(() => MovieUncheckedCreateWithoutCastInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MovieCreateOrConnectWithoutCastInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => MovieUpsertWithoutCastInputObjectSchema).optional(),
    connect: z.lazy(() => MovieWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MovieUpdateWithoutCastInputObjectSchema),
        z.lazy(() => MovieUncheckedUpdateWithoutCastInputObjectSchema)
      ])
      .optional()
  })
  .strict();

export const MovieUpdateOneRequiredWithoutCastNestedInputObjectSchema = Schema;
