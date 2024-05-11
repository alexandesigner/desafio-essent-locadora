import { z } from 'zod';
import { RentalCreateWithoutRenterInputObjectSchema } from './RentalCreateWithoutRenterInput.schema';
import { RentalUncheckedCreateWithoutRenterInputObjectSchema } from './RentalUncheckedCreateWithoutRenterInput.schema';
import { RentalCreateOrConnectWithoutRenterInputObjectSchema } from './RentalCreateOrConnectWithoutRenterInput.schema';
import { RentalCreateManyRenterInputEnvelopeObjectSchema } from './RentalCreateManyRenterInputEnvelope.schema';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateNestedManyWithoutRenterInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RentalCreateWithoutRenterInputObjectSchema),
        z.lazy(() => RentalCreateWithoutRenterInputObjectSchema).array(),
        z.lazy(() => RentalUncheckedCreateWithoutRenterInputObjectSchema),
        z
          .lazy(() => RentalUncheckedCreateWithoutRenterInputObjectSchema)
          .array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RentalCreateOrConnectWithoutRenterInputObjectSchema),
        z
          .lazy(() => RentalCreateOrConnectWithoutRenterInputObjectSchema)
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => RentalCreateManyRenterInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RentalWhereUniqueInputObjectSchema),
        z.lazy(() => RentalWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const RentalCreateNestedManyWithoutRenterInputObjectSchema = Schema;
