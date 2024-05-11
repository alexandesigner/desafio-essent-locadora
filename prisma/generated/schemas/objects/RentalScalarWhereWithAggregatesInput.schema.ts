import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { EnumRentalStatusWithAggregatesFilterObjectSchema } from './EnumRentalStatusWithAggregatesFilter.schema';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RentalScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => RentalScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RentalScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RentalScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => RentalScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    withdrawal_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    delivery_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional()
      .nullable(),
    due_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    late_fee: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    total_amount: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumRentalStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => RentalStatusSchema)
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    renter_id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    movie_stock_id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional()
  })
  .strict();

export const RentalScalarWhereWithAggregatesInputObjectSchema = Schema;
