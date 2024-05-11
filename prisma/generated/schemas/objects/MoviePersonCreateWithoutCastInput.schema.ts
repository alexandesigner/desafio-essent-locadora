import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonCreateWithoutCastInput> = z
  .object({
    type: z.lazy(() => MoviePersonTypeSchema),
    avatar: z.string().optional().nullable(),
    full_name: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional()
  })
  .strict();

export const MoviePersonCreateWithoutCastInputObjectSchema = Schema;
