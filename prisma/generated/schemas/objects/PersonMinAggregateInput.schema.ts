import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    avatar: z.literal(true).optional(),
    email: z.literal(true).optional(),
    type: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    is_verified: z.literal(true).optional(),
    password: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional()
  })
  .strict();

export const PersonMinAggregateInputObjectSchema = Schema;
