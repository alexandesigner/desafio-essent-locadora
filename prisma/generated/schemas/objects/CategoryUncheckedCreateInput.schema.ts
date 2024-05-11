import { z } from 'zod';
import { MovieUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './MovieUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    movies: z
      .lazy(
        () => MovieUncheckedCreateNestedManyWithoutCategoryInputObjectSchema
      )
      .optional()
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
