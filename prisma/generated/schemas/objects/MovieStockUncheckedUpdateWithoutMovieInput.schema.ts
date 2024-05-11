import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RentalUncheckedUpdateManyWithoutMovie_stockNestedInputObjectSchema } from './RentalUncheckedUpdateManyWithoutMovie_stockNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUncheckedUpdateWithoutMovieInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
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
      .lazy(
        () => RentalUncheckedUpdateManyWithoutMovie_stockNestedInputObjectSchema
      )
      .optional()
  })
  .strict();

export const MovieStockUncheckedUpdateWithoutMovieInputObjectSchema = Schema;
