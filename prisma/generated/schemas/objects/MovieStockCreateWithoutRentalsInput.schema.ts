import { z } from 'zod';
import { MovieCreateNestedOneWithoutStockInputObjectSchema } from './MovieCreateNestedOneWithoutStockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateWithoutRentalsInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    movie: z.lazy(() => MovieCreateNestedOneWithoutStockInputObjectSchema)
  })
  .strict();

export const MovieStockCreateWithoutRentalsInputObjectSchema = Schema;
