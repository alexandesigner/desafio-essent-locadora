import { z } from 'zod';
import { RentalCreateNestedManyWithoutMovie_stockInputObjectSchema } from './RentalCreateNestedManyWithoutMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateWithoutMovieInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    rentals: z
      .lazy(() => RentalCreateNestedManyWithoutMovie_stockInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieStockCreateWithoutMovieInputObjectSchema = Schema;
