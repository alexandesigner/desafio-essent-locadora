import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumRentalStatusFilterObjectSchema } from './EnumRentalStatusFilter.schema';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RentalScalarWhereInputObjectSchema),
        z.lazy(() => RentalScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RentalScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RentalScalarWhereInputObjectSchema),
        z.lazy(() => RentalScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    withdrawal_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    delivery_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date()
      ])
      .optional()
      .nullable(),
    due_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    late_fee: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    total_amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumRentalStatusFilterObjectSchema),
        z.lazy(() => RentalStatusSchema)
      ])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    renter_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    movie_stock_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional()
  })
  .strict();

export const RentalScalarWhereInputObjectSchema = Schema;
