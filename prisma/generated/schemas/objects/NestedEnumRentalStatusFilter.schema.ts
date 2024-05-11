import { z } from 'zod';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumRentalStatusFilter> = z
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

export const NestedEnumRentalStatusFilterObjectSchema = Schema;
