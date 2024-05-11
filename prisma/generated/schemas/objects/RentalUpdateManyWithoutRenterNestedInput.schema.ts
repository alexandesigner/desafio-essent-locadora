import { z } from 'zod';
import { RentalCreateWithoutRenterInputObjectSchema } from './RentalCreateWithoutRenterInput.schema';
import { RentalUncheckedCreateWithoutRenterInputObjectSchema } from './RentalUncheckedCreateWithoutRenterInput.schema';
import { RentalCreateOrConnectWithoutRenterInputObjectSchema } from './RentalCreateOrConnectWithoutRenterInput.schema';
import { RentalUpsertWithWhereUniqueWithoutRenterInputObjectSchema } from './RentalUpsertWithWhereUniqueWithoutRenterInput.schema';
import { RentalCreateManyRenterInputEnvelopeObjectSchema } from './RentalCreateManyRenterInputEnvelope.schema';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalUpdateWithWhereUniqueWithoutRenterInputObjectSchema } from './RentalUpdateWithWhereUniqueWithoutRenterInput.schema';
import { RentalUpdateManyWithWhereWithoutRenterInputObjectSchema } from './RentalUpdateManyWithWhereWithoutRenterInput.schema';
import { RentalScalarWhereInputObjectSchema } from './RentalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateManyWithoutRenterNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => RentalUpsertWithWhereUniqueWithoutRenterInputObjectSchema),
        z
          .lazy(() => RentalUpsertWithWhereUniqueWithoutRenterInputObjectSchema)
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => RentalCreateManyRenterInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RentalWhereUniqueInputObjectSchema),
        z.lazy(() => RentalWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RentalWhereUniqueInputObjectSchema),
        z.lazy(() => RentalWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RentalWhereUniqueInputObjectSchema),
        z.lazy(() => RentalWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RentalWhereUniqueInputObjectSchema),
        z.lazy(() => RentalWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RentalUpdateWithWhereUniqueWithoutRenterInputObjectSchema),
        z
          .lazy(() => RentalUpdateWithWhereUniqueWithoutRenterInputObjectSchema)
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RentalUpdateManyWithWhereWithoutRenterInputObjectSchema),
        z
          .lazy(() => RentalUpdateManyWithWhereWithoutRenterInputObjectSchema)
          .array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RentalScalarWhereInputObjectSchema),
        z.lazy(() => RentalScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const RentalUpdateManyWithoutRenterNestedInputObjectSchema = Schema;
