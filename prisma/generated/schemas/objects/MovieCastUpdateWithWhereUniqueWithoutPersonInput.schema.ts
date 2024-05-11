import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastUpdateWithoutPersonInputObjectSchema } from './MovieCastUpdateWithoutPersonInput.schema';
import { MovieCastUncheckedUpdateWithoutPersonInputObjectSchema } from './MovieCastUncheckedUpdateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUpdateWithWhereUniqueWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MovieCastUpdateWithoutPersonInputObjectSchema),
        z.lazy(() => MovieCastUncheckedUpdateWithoutPersonInputObjectSchema)
      ])
    })
    .strict();

export const MovieCastUpdateWithWhereUniqueWithoutPersonInputObjectSchema =
  Schema;
