import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';
import { EnumRentalStatusFieldUpdateOperationsInputObjectSchema } from './EnumRentalStatusFieldUpdateOperationsInput.schema';
import { MovieStockUpdateOneRequiredWithoutRentalsNestedInputObjectSchema } from './MovieStockUpdateOneRequiredWithoutRentalsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateWithoutRenterInput> = z
  .object({
    withdrawal_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    delivery_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    due_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    late_fee: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    total_amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => RentalStatusSchema),
        z.lazy(() => EnumRentalStatusFieldUpdateOperationsInputObjectSchema)
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
    movie_stock: z
      .lazy(
        () => MovieStockUpdateOneRequiredWithoutRentalsNestedInputObjectSchema
      )
      .optional()
  })
  .strict();

export const RentalUpdateWithoutRenterInputObjectSchema = Schema;
