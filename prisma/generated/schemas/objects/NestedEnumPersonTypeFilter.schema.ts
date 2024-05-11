import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPersonTypeFilter> = z
  .object({
    equals: z.lazy(() => PersonTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => PersonTypeSchema).array(),
        z.lazy(() => PersonTypeSchema)
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => PersonTypeSchema).array(),
        z.lazy(() => PersonTypeSchema)
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => PersonTypeSchema),
        z.lazy(() => NestedEnumPersonTypeFilterObjectSchema)
      ])
      .optional()
  })
  .strict();

export const NestedEnumPersonTypeFilterObjectSchema = Schema;
