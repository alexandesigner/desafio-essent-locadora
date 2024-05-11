import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumRentalStatusFilterObjectSchema } from './EnumRentalStatusFilter.schema';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';
import { PersonRelationFilterObjectSchema } from './PersonRelationFilter.schema';
import { PersonWhereInputObjectSchema } from './PersonWhereInput.schema';
import { MovieStockRelationFilterObjectSchema } from './MovieStockRelationFilter.schema';
import { MovieStockWhereInputObjectSchema } from './MovieStockWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RentalWhereInputObjectSchema),
        z.lazy(() => RentalWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RentalWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RentalWhereInputObjectSchema),
        z.lazy(() => RentalWhereInputObjectSchema).array()
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
      .optional(),
    renter: z
      .union([
        z.lazy(() => PersonRelationFilterObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema)
      ])
      .optional(),
    movie_stock: z
      .union([
        z.lazy(() => MovieStockRelationFilterObjectSchema),
        z.lazy(() => MovieStockWhereInputObjectSchema)
      ])
      .optional()
  })
  .strict();

export const RentalWhereInputObjectSchema = Schema;
