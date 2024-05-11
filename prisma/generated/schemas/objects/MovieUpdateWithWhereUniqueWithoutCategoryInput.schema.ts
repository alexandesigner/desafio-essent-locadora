import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieUpdateWithoutCategoryInputObjectSchema } from './MovieUpdateWithoutCategoryInput.schema';
import { MovieUncheckedUpdateWithoutCategoryInputObjectSchema } from './MovieUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MovieWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MovieUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => MovieUncheckedUpdateWithoutCategoryInputObjectSchema)
      ])
    })
    .strict();

export const MovieUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
