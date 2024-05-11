import { z } from 'zod';
import { PersonUpdateWithoutRentalsInputObjectSchema } from './PersonUpdateWithoutRentalsInput.schema';
import { PersonUncheckedUpdateWithoutRentalsInputObjectSchema } from './PersonUncheckedUpdateWithoutRentalsInput.schema';
import { PersonCreateWithoutRentalsInputObjectSchema } from './PersonCreateWithoutRentalsInput.schema';
import { PersonUncheckedCreateWithoutRentalsInputObjectSchema } from './PersonUncheckedCreateWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithoutRentalsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonUpdateWithoutRentalsInputObjectSchema),
      z.lazy(() => PersonUncheckedUpdateWithoutRentalsInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => PersonCreateWithoutRentalsInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutRentalsInputObjectSchema)
    ])
  })
  .strict();

export const PersonUpsertWithoutRentalsInputObjectSchema = Schema;
