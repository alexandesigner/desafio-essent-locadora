import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyInput> = z
  .object({
    id: z.number().optional(),
    avatar: z.string().optional().nullable(),
    email: z.string(),
    type: z.lazy(() => PersonTypeSchema),
    full_name: z.string(),
    is_verified: z.boolean().optional(),
    password: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional()
  })
  .strict();

export const PersonCreateManyInputObjectSchema = Schema;
