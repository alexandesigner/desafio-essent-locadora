import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPersonTypeFilterObjectSchema } from './NestedEnumPersonTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPersonTypeWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumPersonTypeWithAggregatesFilterObjectSchema)
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPersonTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPersonTypeFilterObjectSchema).optional()
  })
  .strict();

export const NestedEnumPersonTypeWithAggregatesFilterObjectSchema = Schema;
