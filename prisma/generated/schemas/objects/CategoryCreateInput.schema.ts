import { z } from 'zod';
import { MovieCreateNestedManyWithoutCategoryInputObjectSchema } from './MovieCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    name: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    movies: z
      .lazy(() => MovieCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional()
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
