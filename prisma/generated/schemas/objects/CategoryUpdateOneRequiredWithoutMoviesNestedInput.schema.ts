import { z } from 'zod';
import { CategoryCreateWithoutMoviesInputObjectSchema } from './CategoryCreateWithoutMoviesInput.schema';
import { CategoryUncheckedCreateWithoutMoviesInputObjectSchema } from './CategoryUncheckedCreateWithoutMoviesInput.schema';
import { CategoryCreateOrConnectWithoutMoviesInputObjectSchema } from './CategoryCreateOrConnectWithoutMoviesInput.schema';
import { CategoryUpsertWithoutMoviesInputObjectSchema } from './CategoryUpsertWithoutMoviesInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutMoviesInputObjectSchema } from './CategoryUpdateWithoutMoviesInput.schema';
import { CategoryUncheckedUpdateWithoutMoviesInputObjectSchema } from './CategoryUncheckedUpdateWithoutMoviesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutMoviesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutMoviesInputObjectSchema),
          z.lazy(() => CategoryUncheckedCreateWithoutMoviesInputObjectSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CategoryCreateOrConnectWithoutMoviesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CategoryUpsertWithoutMoviesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutMoviesInputObjectSchema),
          z.lazy(() => CategoryUncheckedUpdateWithoutMoviesInputObjectSchema)
        ])
        .optional()
    })
    .strict();

export const CategoryUpdateOneRequiredWithoutMoviesNestedInputObjectSchema =
  Schema;
