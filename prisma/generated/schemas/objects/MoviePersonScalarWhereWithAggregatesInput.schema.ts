import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumMoviePersonTypeWithAggregatesFilterObjectSchema } from './EnumMoviePersonTypeWithAggregatesFilter.schema';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MoviePersonScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MoviePersonScalarWhereWithAggregatesInputObjectSchema)
          .array()
      ])
      .optional(),
    OR: z
      .lazy(() => MoviePersonScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MoviePersonScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MoviePersonScalarWhereWithAggregatesInputObjectSchema)
          .array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumMoviePersonTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => MoviePersonTypeSchema)
      ])
      .optional(),
    avatar: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    full_name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
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
      .optional()
  })
  .strict();

export const MoviePersonScalarWhereWithAggregatesInputObjectSchema = Schema;
