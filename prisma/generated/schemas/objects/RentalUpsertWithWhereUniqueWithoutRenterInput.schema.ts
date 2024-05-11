import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalUpdateWithoutRenterInputObjectSchema } from './RentalUpdateWithoutRenterInput.schema';
import { RentalUncheckedUpdateWithoutRenterInputObjectSchema } from './RentalUncheckedUpdateWithoutRenterInput.schema';
import { RentalCreateWithoutRenterInputObjectSchema } from './RentalCreateWithoutRenterInput.schema';
import { RentalUncheckedCreateWithoutRenterInputObjectSchema } from './RentalUncheckedCreateWithoutRenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpsertWithWhereUniqueWithoutRenterInput> =
  z
    .object({
      where: z.lazy(() => RentalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RentalUpdateWithoutRenterInputObjectSchema),
        z.lazy(() => RentalUncheckedUpdateWithoutRenterInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => RentalCreateWithoutRenterInputObjectSchema),
        z.lazy(() => RentalUncheckedCreateWithoutRenterInputObjectSchema)
      ])
    })
    .strict();

export const RentalUpsertWithWhereUniqueWithoutRenterInputObjectSchema = Schema;
