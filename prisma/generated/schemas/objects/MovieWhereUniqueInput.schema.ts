import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    title: z.string().optional()
  })
  .strict();

export const MovieWhereUniqueInputObjectSchema = Schema;
