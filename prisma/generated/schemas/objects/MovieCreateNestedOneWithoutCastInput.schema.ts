import { z } from 'zod';
import { MovieCreateWithoutCastInputObjectSchema } from './MovieCreateWithoutCastInput.schema';
import { MovieUncheckedCreateWithoutCastInputObjectSchema } from './MovieUncheckedCreateWithoutCastInput.schema';
import { MovieCreateOrConnectWithoutCastInputObjectSchema } from './MovieCreateOrConnectWithoutCastInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateNestedOneWithoutCastInput> = z
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
    connect: z.lazy(() => MovieWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const MovieCreateNestedOneWithoutCastInputObjectSchema = Schema;
