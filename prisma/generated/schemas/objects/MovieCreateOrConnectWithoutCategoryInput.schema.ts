import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieCreateWithoutCategoryInputObjectSchema } from './MovieCreateWithoutCategoryInput.schema';
import { MovieUncheckedCreateWithoutCategoryInputObjectSchema } from './MovieUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => MovieWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => MovieUncheckedCreateWithoutCategoryInputObjectSchema)
    ])
  })
  .strict();

export const MovieCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
