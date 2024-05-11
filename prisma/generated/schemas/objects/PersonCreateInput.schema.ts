import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';
import { RentalCreateNestedManyWithoutRenterInputObjectSchema } from './RentalCreateNestedManyWithoutRenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateInput> = z
  .object({
    avatar: z.string().optional().nullable(),
    email: z.string(),
    type: z.lazy(() => PersonTypeSchema),
    full_name: z.string(),
    is_verified: z.boolean().optional(),
    password: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    rentals: z
      .lazy(() => RentalCreateNestedManyWithoutRenterInputObjectSchema)
      .optional()
  })
  .strict();

export const PersonCreateInputObjectSchema = Schema;
