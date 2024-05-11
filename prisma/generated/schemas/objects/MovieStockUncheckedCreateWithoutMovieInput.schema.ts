import { z } from 'zod';
import { RentalUncheckedCreateNestedManyWithoutMovie_stockInputObjectSchema } from './RentalUncheckedCreateNestedManyWithoutMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUncheckedCreateWithoutMovieInput> = z
  .object({
    id: z.number().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    rentals: z
      .lazy(
        () => RentalUncheckedCreateNestedManyWithoutMovie_stockInputObjectSchema
      )
      .optional()
  })
  .strict();

export const MovieStockUncheckedCreateWithoutMovieInputObjectSchema = Schema;
