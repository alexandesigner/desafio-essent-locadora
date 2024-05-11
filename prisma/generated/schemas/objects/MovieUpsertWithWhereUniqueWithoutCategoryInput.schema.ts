import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieUpdateWithoutCategoryInputObjectSchema } from './MovieUpdateWithoutCategoryInput.schema';
import { MovieUncheckedUpdateWithoutCategoryInputObjectSchema } from './MovieUncheckedUpdateWithoutCategoryInput.schema';
import { MovieCreateWithoutCategoryInputObjectSchema } from './MovieCreateWithoutCategoryInput.schema';
import { MovieUncheckedCreateWithoutCategoryInputObjectSchema } from './MovieUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MovieWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MovieUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => MovieUncheckedUpdateWithoutCategoryInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => MovieCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => MovieUncheckedCreateWithoutCategoryInputObjectSchema)
      ])
    })
    .strict();

export const MovieUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
