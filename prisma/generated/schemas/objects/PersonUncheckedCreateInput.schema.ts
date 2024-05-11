import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';
import { RentalUncheckedCreateNestedManyWithoutRenterInputObjectSchema } from './RentalUncheckedCreateNestedManyWithoutRenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    avatar: z.string().optional().nullable(),
    email: z.string(),
    type: z.lazy(() => PersonTypeSchema),
    full_name: z.string(),
    is_verified: z.boolean().optional(),
    password: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    rentals: z
      .lazy(() => RentalUncheckedCreateNestedManyWithoutRenterInputObjectSchema)
      .optional()
  })
  .strict();

export const PersonUncheckedCreateInputObjectSchema = Schema;
