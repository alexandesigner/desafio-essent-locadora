import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPersonTypeWithAggregatesFilterObjectSchema } from './EnumPersonTypeWithAggregatesFilter.schema';
import { PersonTypeSchema } from '../enums/PersonType.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PersonScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => PersonScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PersonScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    avatar: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPersonTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => PersonTypeSchema)
      ])
      .optional(),
    full_name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    is_verified: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    password: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
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
      .optional()
  })
  .strict();

export const PersonScalarWhereWithAggregatesInputObjectSchema = Schema;
