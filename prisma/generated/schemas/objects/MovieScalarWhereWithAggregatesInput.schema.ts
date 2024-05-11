import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => MovieScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => MovieScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    release_year: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    featured_image: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    thumb_image: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    synopsis: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    rental_value: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    category_id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional()
  })
  .strict();

export const MovieScalarWhereWithAggregatesInputObjectSchema = Schema;
