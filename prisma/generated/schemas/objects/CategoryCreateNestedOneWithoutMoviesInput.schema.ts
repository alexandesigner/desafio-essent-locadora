import { z } from 'zod';
import { CategoryCreateWithoutMoviesInputObjectSchema } from './CategoryCreateWithoutMoviesInput.schema';
import { CategoryUncheckedCreateWithoutMoviesInputObjectSchema } from './CategoryUncheckedCreateWithoutMoviesInput.schema';
import { CategoryCreateOrConnectWithoutMoviesInputObjectSchema } from './CategoryCreateOrConnectWithoutMoviesInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutMoviesInput> = z
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
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const CategoryCreateNestedOneWithoutMoviesInputObjectSchema = Schema;
