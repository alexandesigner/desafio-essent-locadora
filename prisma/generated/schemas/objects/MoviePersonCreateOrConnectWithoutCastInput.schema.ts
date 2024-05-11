import { z } from 'zod';
import { MoviePersonWhereUniqueInputObjectSchema } from './MoviePersonWhereUniqueInput.schema';
import { MoviePersonCreateWithoutCastInputObjectSchema } from './MoviePersonCreateWithoutCastInput.schema';
import { MoviePersonUncheckedCreateWithoutCastInputObjectSchema } from './MoviePersonUncheckedCreateWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonCreateOrConnectWithoutCastInput> = z
  .object({
    where: z.lazy(() => MoviePersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MoviePersonCreateWithoutCastInputObjectSchema),
      z.lazy(() => MoviePersonUncheckedCreateWithoutCastInputObjectSchema)
    ])
  })
  .strict();

export const MoviePersonCreateOrConnectWithoutCastInputObjectSchema = Schema;
