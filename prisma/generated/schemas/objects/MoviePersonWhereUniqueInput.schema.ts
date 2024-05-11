import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    full_name: z.string().optional()
  })
  .strict();

export const MoviePersonWhereUniqueInputObjectSchema = Schema;
