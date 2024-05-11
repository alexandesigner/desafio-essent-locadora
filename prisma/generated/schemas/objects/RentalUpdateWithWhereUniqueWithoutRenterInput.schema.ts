import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalUpdateWithoutRenterInputObjectSchema } from './RentalUpdateWithoutRenterInput.schema';
import { RentalUncheckedUpdateWithoutRenterInputObjectSchema } from './RentalUncheckedUpdateWithoutRenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateWithWhereUniqueWithoutRenterInput> =
  z
    .object({
      where: z.lazy(() => RentalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RentalUpdateWithoutRenterInputObjectSchema),
        z.lazy(() => RentalUncheckedUpdateWithoutRenterInputObjectSchema)
      ])
    })
    .strict();

export const RentalUpdateWithWhereUniqueWithoutRenterInputObjectSchema = Schema;
