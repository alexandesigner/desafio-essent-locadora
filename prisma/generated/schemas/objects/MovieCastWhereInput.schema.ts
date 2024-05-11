import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MovieRelationFilterObjectSchema } from './MovieRelationFilter.schema';
import { MovieWhereInputObjectSchema } from './MovieWhereInput.schema';
import { MoviePersonRelationFilterObjectSchema } from './MoviePersonRelationFilter.schema';
import { MoviePersonWhereInputObjectSchema } from './MoviePersonWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieCastWhereInputObjectSchema),
        z.lazy(() => MovieCastWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieCastWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieCastWhereInputObjectSchema),
        z.lazy(() => MovieCastWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    movie_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    person_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    movie: z
      .union([
        z.lazy(() => MovieRelationFilterObjectSchema),
        z.lazy(() => MovieWhereInputObjectSchema)
      ])
      .optional(),
    person: z
      .union([
        z.lazy(() => MoviePersonRelationFilterObjectSchema),
        z.lazy(() => MoviePersonWhereInputObjectSchema)
      ])
      .optional()
  })
  .strict();

export const MovieCastWhereInputObjectSchema = Schema;
