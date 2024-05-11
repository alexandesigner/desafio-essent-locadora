import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RentalUpdateManyWithoutMovie_stockNestedInputObjectSchema } from './RentalUpdateManyWithoutMovie_stockNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpdateWithoutMovieInput> = z
  .object({
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    updated_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    rentals: z
      .lazy(() => RentalUpdateManyWithoutMovie_stockNestedInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieStockUpdateWithoutMovieInputObjectSchema = Schema;
