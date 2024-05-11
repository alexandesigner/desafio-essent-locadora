import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieCastScalarWhereInputObjectSchema),
        z.lazy(() => MovieCastScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieCastScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieCastScalarWhereInputObjectSchema),
        z.lazy(() => MovieCastScalarWhereInputObjectSchema).array()
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
      .optional()
  })
  .strict();

export const MovieCastScalarWhereInputObjectSchema = Schema;
