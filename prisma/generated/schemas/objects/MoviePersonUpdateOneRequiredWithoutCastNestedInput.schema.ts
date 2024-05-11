import { z } from 'zod';
import { MoviePersonCreateWithoutCastInputObjectSchema } from './MoviePersonCreateWithoutCastInput.schema';
import { MoviePersonUncheckedCreateWithoutCastInputObjectSchema } from './MoviePersonUncheckedCreateWithoutCastInput.schema';
import { MoviePersonCreateOrConnectWithoutCastInputObjectSchema } from './MoviePersonCreateOrConnectWithoutCastInput.schema';
import { MoviePersonUpsertWithoutCastInputObjectSchema } from './MoviePersonUpsertWithoutCastInput.schema';
import { MoviePersonWhereUniqueInputObjectSchema } from './MoviePersonWhereUniqueInput.schema';
import { MoviePersonUpdateWithoutCastInputObjectSchema } from './MoviePersonUpdateWithoutCastInput.schema';
import { MoviePersonUncheckedUpdateWithoutCastInputObjectSchema } from './MoviePersonUncheckedUpdateWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonUpdateOneRequiredWithoutCastNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoviePersonCreateWithoutCastInputObjectSchema),
          z.lazy(() => MoviePersonUncheckedCreateWithoutCastInputObjectSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MoviePersonCreateOrConnectWithoutCastInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MoviePersonUpsertWithoutCastInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MoviePersonWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MoviePersonUpdateWithoutCastInputObjectSchema),
          z.lazy(() => MoviePersonUncheckedUpdateWithoutCastInputObjectSchema)
        ])
        .optional()
    })
    .strict();

export const MoviePersonUpdateOneRequiredWithoutCastNestedInputObjectSchema =
  Schema;
