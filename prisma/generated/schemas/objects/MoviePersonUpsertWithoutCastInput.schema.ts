import { z } from 'zod';
import { MoviePersonUpdateWithoutCastInputObjectSchema } from './MoviePersonUpdateWithoutCastInput.schema';
import { MoviePersonUncheckedUpdateWithoutCastInputObjectSchema } from './MoviePersonUncheckedUpdateWithoutCastInput.schema';
import { MoviePersonCreateWithoutCastInputObjectSchema } from './MoviePersonCreateWithoutCastInput.schema';
import { MoviePersonUncheckedCreateWithoutCastInputObjectSchema } from './MoviePersonUncheckedCreateWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonUpsertWithoutCastInput> = z
  .object({
    update: z.union([
      z.lazy(() => MoviePersonUpdateWithoutCastInputObjectSchema),
      z.lazy(() => MoviePersonUncheckedUpdateWithoutCastInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => MoviePersonCreateWithoutCastInputObjectSchema),
      z.lazy(() => MoviePersonUncheckedCreateWithoutCastInputObjectSchema)
    ])
  })
  .strict();

export const MoviePersonUpsertWithoutCastInputObjectSchema = Schema;
