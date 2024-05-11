import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { MovieCastListRelationFilterObjectSchema } from './MovieCastListRelationFilter.schema';
import { MovieStockListRelationFilterObjectSchema } from './MovieStockListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieWhereInputObjectSchema),
        z.lazy(() => MovieWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieWhereInputObjectSchema),
        z.lazy(() => MovieWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    release_year: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    featured_image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    thumb_image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    synopsis: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    rental_value: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    category_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema)
      ])
      .optional(),
    cast: z.lazy(() => MovieCastListRelationFilterObjectSchema).optional(),
    stock: z.lazy(() => MovieStockListRelationFilterObjectSchema).optional()
  })
  .strict();

export const MovieWhereInputObjectSchema = Schema;
