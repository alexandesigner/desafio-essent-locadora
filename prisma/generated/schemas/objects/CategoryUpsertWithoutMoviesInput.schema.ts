import { z } from 'zod';
import { CategoryUpdateWithoutMoviesInputObjectSchema } from './CategoryUpdateWithoutMoviesInput.schema';
import { CategoryUncheckedUpdateWithoutMoviesInputObjectSchema } from './CategoryUncheckedUpdateWithoutMoviesInput.schema';
import { CategoryCreateWithoutMoviesInputObjectSchema } from './CategoryCreateWithoutMoviesInput.schema';
import { CategoryUncheckedCreateWithoutMoviesInputObjectSchema } from './CategoryUncheckedCreateWithoutMoviesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutMoviesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutMoviesInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutMoviesInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutMoviesInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutMoviesInputObjectSchema)
    ])
  })
  .strict();

export const CategoryUpsertWithoutMoviesInputObjectSchema = Schema;
