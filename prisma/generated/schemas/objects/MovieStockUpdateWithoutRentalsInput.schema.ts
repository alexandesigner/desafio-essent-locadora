import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MovieUpdateOneRequiredWithoutStockNestedInputObjectSchema } from './MovieUpdateOneRequiredWithoutStockNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUpdateWithoutRentalsInput> = z
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
      .optional()
  })
  .strict();

export const MovieStockUpdateWithoutRentalsInputObjectSchema = Schema;
