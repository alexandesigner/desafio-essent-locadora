import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalCreateWithoutRenterInputObjectSchema } from './RentalCreateWithoutRenterInput.schema';
import { RentalUncheckedCreateWithoutRenterInputObjectSchema } from './RentalUncheckedCreateWithoutRenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateOrConnectWithoutRenterInput> = z
  .object({
    where: z.lazy(() => RentalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RentalCreateWithoutRenterInputObjectSchema),
      z.lazy(() => RentalUncheckedCreateWithoutRenterInputObjectSchema)
    ])
  })
  .strict();

export const RentalCreateOrConnectWithoutRenterInputObjectSchema = Schema;
