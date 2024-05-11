import { z } from 'zod';
import { MovieCreateNestedOneWithoutStockInputObjectSchema } from './MovieCreateNestedOneWithoutStockInput.schema';
import { RentalCreateNestedManyWithoutMovie_stockInputObjectSchema } from './RentalCreateNestedManyWithoutMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    movie: z.lazy(() => MovieCreateNestedOneWithoutStockInputObjectSchema),
    rentals: z
      .lazy(() => RentalCreateNestedManyWithoutMovie_stockInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieStockCreateInputObjectSchema = Schema;
