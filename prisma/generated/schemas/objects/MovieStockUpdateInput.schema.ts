import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MovieUpdateOneRequiredWithoutStockNestedInputObjectSchema } from './MovieUpdateOneRequiredWithoutStockNestedInput.schema';
import { RentalUpdateManyWithoutMovie_stockNestedInputObjectSchema } from './RentalUpdateManyWithoutMovie_stockNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpdateInput> = z
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
    movie: z
      .lazy(() => MovieUpdateOneRequiredWithoutStockNestedInputObjectSchema)
      .optional(),
    rentals: z
      .lazy(() => RentalUpdateManyWithoutMovie_stockNestedInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieStockUpdateInputObjectSchema = Schema;
