import { z } from 'zod';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';
import { NestedEnumRentalStatusWithAggregatesFilterObjectSchema } from './NestedEnumRentalStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRentalStatusFilterObjectSchema } from './NestedEnumRentalStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRentalStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => RentalStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => RentalStatusSchema).array(),
        z.lazy(() => RentalStatusSchema)
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => RentalStatusSchema).array(),
        z.lazy(() => RentalStatusSchema)
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => RentalStatusSchema),
        z.lazy(() => NestedEnumRentalStatusWithAggregatesFilterObjectSchema)
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumRentalStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumRentalStatusFilterObjectSchema).optional()
  })
  .strict();

export const EnumRentalStatusWithAggregatesFilterObjectSchema = Schema;
