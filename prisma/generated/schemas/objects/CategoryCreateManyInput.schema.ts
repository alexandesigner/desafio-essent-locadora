import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional()
  })
  .strict();

export const CategoryCreateManyInputObjectSchema = Schema;
