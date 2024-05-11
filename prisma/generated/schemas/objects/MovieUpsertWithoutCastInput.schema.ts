import { z } from 'zod';
import { MovieUpdateWithoutCastInputObjectSchema } from './MovieUpdateWithoutCastInput.schema';
import { MovieUncheckedUpdateWithoutCastInputObjectSchema } from './MovieUncheckedUpdateWithoutCastInput.schema';
import { MovieCreateWithoutCastInputObjectSchema } from './MovieCreateWithoutCastInput.schema';
import { MovieUncheckedCreateWithoutCastInputObjectSchema } from './MovieUncheckedCreateWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpsertWithoutCastInput> = z
  .object({
    update: z.union([
      z.lazy(() => MovieUpdateWithoutCastInputObjectSchema),
      z.lazy(() => MovieUncheckedUpdateWithoutCastInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => MovieCreateWithoutCastInputObjectSchema),
      z.lazy(() => MovieUncheckedCreateWithoutCastInputObjectSchema)
    ])
  })
  .strict();

export const MovieUpsertWithoutCastInputObjectSchema = Schema;
