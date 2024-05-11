import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MovieRelationFilterObjectSchema } from './MovieRelationFilter.schema';
import { MovieWhereInputObjectSchema } from './MovieWhereInput.schema';
import { RentalListRelationFilterObjectSchema } from './RentalListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieStockWhereInputObjectSchema),
        z.lazy(() => MovieStockWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieStockWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieStockWhereInputObjectSchema),
        z.lazy(() => MovieStockWhereInputObjectSchema).array()
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
      .optional(),
    movie: z
      .union([
        z.lazy(() => MovieRelationFilterObjectSchema),
        z.lazy(() => MovieWhereInputObjectSchema)
      ])
      .optional(),
    rentals: z.lazy(() => RentalListRelationFilterObjectSchema).optional()
  })
  .strict();

export const MovieStockWhereInputObjectSchema = Schema;
