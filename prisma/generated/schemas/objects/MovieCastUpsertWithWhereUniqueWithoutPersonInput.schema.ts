import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastUpdateWithoutPersonInputObjectSchema } from './MovieCastUpdateWithoutPersonInput.schema';
import { MovieCastUncheckedUpdateWithoutPersonInputObjectSchema } from './MovieCastUncheckedUpdateWithoutPersonInput.schema';
import { MovieCastCreateWithoutPersonInputObjectSchema } from './MovieCastCreateWithoutPersonInput.schema';
import { MovieCastUncheckedCreateWithoutPersonInputObjectSchema } from './MovieCastUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUpsertWithWhereUniqueWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MovieCastUpdateWithoutPersonInputObjectSchema),
        z.lazy(() => MovieCastUncheckedUpdateWithoutPersonInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => MovieCastCreateWithoutPersonInputObjectSchema),
        z.lazy(() => MovieCastUncheckedCreateWithoutPersonInputObjectSchema)
      ])
    })
    .strict();

export const MovieCastUpsertWithWhereUniqueWithoutPersonInputObjectSchema =
  Schema;
