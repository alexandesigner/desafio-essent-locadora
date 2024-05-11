import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPersonTypeFilterObjectSchema } from './EnumPersonTypeFilter.schema';
import { PersonTypeSchema } from '../enums/PersonType.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RentalListRelationFilterObjectSchema } from './RentalListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonWhereInputObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => PersonWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonWhereInputObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    avatar: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPersonTypeFilterObjectSchema),
        z.lazy(() => PersonTypeSchema)
      ])
      .optional(),
    full_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    is_verified: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    rentals: z.lazy(() => RentalListRelationFilterObjectSchema).optional()
  })
  .strict();

export const PersonWhereInputObjectSchema = Schema;
