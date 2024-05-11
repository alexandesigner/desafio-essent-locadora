import { z } from 'zod';
import { MoviePersonCreateWithoutCastInputObjectSchema } from './MoviePersonCreateWithoutCastInput.schema';
import { MoviePersonUncheckedCreateWithoutCastInputObjectSchema } from './MoviePersonUncheckedCreateWithoutCastInput.schema';
import { MoviePersonCreateOrConnectWithoutCastInputObjectSchema } from './MoviePersonCreateOrConnectWithoutCastInput.schema';
import { MoviePersonWhereUniqueInputObjectSchema } from './MoviePersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonCreateNestedOneWithoutCastInput> = z
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
    connect: z.lazy(() => MoviePersonWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const MoviePersonCreateNestedOneWithoutCastInputObjectSchema = Schema;
