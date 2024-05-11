import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutMoviesInputObjectSchema } from './CategoryCreateWithoutMoviesInput.schema';
import { CategoryUncheckedCreateWithoutMoviesInputObjectSchema } from './CategoryUncheckedCreateWithoutMoviesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutMoviesInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutMoviesInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutMoviesInputObjectSchema)
    ])
  })
  .strict();

export const CategoryCreateOrConnectWithoutMoviesInputObjectSchema = Schema;
