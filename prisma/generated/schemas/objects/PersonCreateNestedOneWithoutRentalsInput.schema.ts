import { z } from 'zod';
import { PersonCreateWithoutRentalsInputObjectSchema } from './PersonCreateWithoutRentalsInput.schema';
import { PersonUncheckedCreateWithoutRentalsInputObjectSchema } from './PersonUncheckedCreateWithoutRentalsInput.schema';
import { PersonCreateOrConnectWithoutRentalsInputObjectSchema } from './PersonCreateOrConnectWithoutRentalsInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateNestedOneWithoutRentalsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PersonCreateWithoutRentalsInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutRentalsInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PersonCreateOrConnectWithoutRentalsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PersonWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const PersonCreateNestedOneWithoutRentalsInputObjectSchema = Schema;
