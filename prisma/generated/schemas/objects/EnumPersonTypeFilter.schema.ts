import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';
import { NestedEnumPersonTypeFilterObjectSchema } from './NestedEnumPersonTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPersonTypeFilter> = z
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

export const EnumPersonTypeFilterObjectSchema = Schema;
