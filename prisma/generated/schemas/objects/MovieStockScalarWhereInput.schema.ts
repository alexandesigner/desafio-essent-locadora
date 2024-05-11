import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieStockScalarWhereInputObjectSchema),
        z.lazy(() => MovieStockScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieStockScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieStockScalarWhereInputObjectSchema),
        z.lazy(() => MovieStockScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    movie_id: z
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

export const MovieStockScalarWhereInputObjectSchema = Schema;
