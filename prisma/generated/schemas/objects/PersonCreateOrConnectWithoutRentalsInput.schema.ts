import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutRentalsInputObjectSchema } from './PersonCreateWithoutRentalsInput.schema';
import { PersonUncheckedCreateWithoutRentalsInputObjectSchema } from './PersonUncheckedCreateWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutRentalsInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutRentalsInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutRentalsInputObjectSchema)
    ])
  })
  .strict();

export const PersonCreateOrConnectWithoutRentalsInputObjectSchema = Schema;
