import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieCreateWithoutCastInputObjectSchema } from './MovieCreateWithoutCastInput.schema';
import { MovieUncheckedCreateWithoutCastInputObjectSchema } from './MovieUncheckedCreateWithoutCastInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateOrConnectWithoutCastInput> = z
  .object({
    where: z.lazy(() => MovieWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieCreateWithoutCastInputObjectSchema),
      z.lazy(() => MovieUncheckedCreateWithoutCastInputObjectSchema)
    ])
  })
  .strict();

export const MovieCreateOrConnectWithoutCastInputObjectSchema = Schema;
