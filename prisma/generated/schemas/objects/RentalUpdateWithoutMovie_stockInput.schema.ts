import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';
import { EnumRentalStatusFieldUpdateOperationsInputObjectSchema } from './EnumRentalStatusFieldUpdateOperationsInput.schema';
import { PersonUpdateOneRequiredWithoutRentalsNestedInputObjectSchema } from './PersonUpdateOneRequiredWithoutRentalsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateWithoutMovie_stockInput> = z
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
    renter: z
      .lazy(() => PersonUpdateOneRequiredWithoutRentalsNestedInputObjectSchema)
      .optional()
  })
  .strict();

export const RentalUpdateWithoutMovie_stockInputObjectSchema = Schema;
