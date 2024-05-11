import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumMoviePersonTypeFilterObjectSchema } from './EnumMoviePersonTypeFilter.schema';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MovieCastListRelationFilterObjectSchema } from './MovieCastListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MoviePersonWhereInputObjectSchema),
        z.lazy(() => MoviePersonWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MoviePersonWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MoviePersonWhereInputObjectSchema),
        z.lazy(() => MoviePersonWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    type: z
      .union([
        z.lazy(() => EnumMoviePersonTypeFilterObjectSchema),
        z.lazy(() => MoviePersonTypeSchema)
      ])
      .optional(),
    avatar: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    full_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    cast: z.lazy(() => MovieCastListRelationFilterObjectSchema).optional()
  })
  .strict();

export const MoviePersonWhereInputObjectSchema = Schema;
