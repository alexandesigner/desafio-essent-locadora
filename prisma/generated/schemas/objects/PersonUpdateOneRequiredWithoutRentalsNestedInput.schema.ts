import { z } from 'zod';
import { PersonCreateWithoutRentalsInputObjectSchema } from './PersonCreateWithoutRentalsInput.schema';
import { PersonUncheckedCreateWithoutRentalsInputObjectSchema } from './PersonUncheckedCreateWithoutRentalsInput.schema';
import { PersonCreateOrConnectWithoutRentalsInputObjectSchema } from './PersonCreateOrConnectWithoutRentalsInput.schema';
import { PersonUpsertWithoutRentalsInputObjectSchema } from './PersonUpsertWithoutRentalsInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutRentalsInputObjectSchema } from './PersonUpdateWithoutRentalsInput.schema';
import { PersonUncheckedUpdateWithoutRentalsInputObjectSchema } from './PersonUncheckedUpdateWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutRentalsNestedInput> =
  z
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
      upsert: z
        .lazy(() => PersonUpsertWithoutRentalsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PersonWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PersonUpdateWithoutRentalsInputObjectSchema),
          z.lazy(() => PersonUncheckedUpdateWithoutRentalsInputObjectSchema)
        ])
        .optional()
    })
    .strict();

export const PersonUpdateOneRequiredWithoutRentalsNestedInputObjectSchema =
  Schema;
