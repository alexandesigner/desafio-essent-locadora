import { z } from 'zod';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';
import { NestedEnumRentalStatusFilterObjectSchema } from './NestedEnumRentalStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRentalStatusFilter> = z
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
        z.lazy(() => NestedEnumRentalStatusFilterObjectSchema)
      ])
      .optional()
  })
  .strict();

export const EnumRentalStatusFilterObjectSchema = Schema;
