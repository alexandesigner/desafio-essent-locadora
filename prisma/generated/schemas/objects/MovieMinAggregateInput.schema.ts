import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    release_year: z.literal(true).optional(),
    featured_image: z.literal(true).optional(),
    thumb_image: z.literal(true).optional(),
    synopsis: z.literal(true).optional(),
    rental_value: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    category_id: z.literal(true).optional()
  })
  .strict();

export const MovieMinAggregateInputObjectSchema = Schema;
