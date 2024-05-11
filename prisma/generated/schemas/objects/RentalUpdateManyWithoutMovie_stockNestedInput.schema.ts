import { z } from 'zod';
import { RentalCreateWithoutMovie_stockInputObjectSchema } from './RentalCreateWithoutMovie_stockInput.schema';
import { RentalUncheckedCreateWithoutMovie_stockInputObjectSchema } from './RentalUncheckedCreateWithoutMovie_stockInput.schema';
import { RentalCreateOrConnectWithoutMovie_stockInputObjectSchema } from './RentalCreateOrConnectWithoutMovie_stockInput.schema';
import { RentalUpsertWithWhereUniqueWithoutMovie_stockInputObjectSchema } from './RentalUpsertWithWhereUniqueWithoutMovie_stockInput.schema';
import { RentalCreateManyMovie_stockInputEnvelopeObjectSchema } from './RentalCreateManyMovie_stockInputEnvelope.schema';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalUpdateWithWhereUniqueWithoutMovie_stockInputObjectSchema } from './RentalUpdateWithWhereUniqueWithoutMovie_stockInput.schema';
import { RentalUpdateManyWithWhereWithoutMovie_stockInputObjectSchema } from './RentalUpdateManyWithWhereWithoutMovie_stockInput.schema';
import { RentalScalarWhereInputObjectSchema } from './RentalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateManyWithoutMovie_stockNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RentalCreateWithoutMovie_stockInputObjectSchema),
          z.lazy(() => RentalCreateWithoutMovie_stockInputObjectSchema).array(),
          z.lazy(
            () => RentalUncheckedCreateWithoutMovie_stockInputObjectSchema
          ),
          z
            .lazy(
              () => RentalUncheckedCreateWithoutMovie_stockInputObjectSchema
            )
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RentalCreateOrConnectWithoutMovie_stockInputObjectSchema
          ),
          z
            .lazy(
              () => RentalCreateOrConnectWithoutMovie_stockInputObjectSchema
            )
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => RentalUpsertWithWhereUniqueWithoutMovie_stockInputObjectSchema
          ),
          z
            .lazy(
              () =>
                RentalUpsertWithWhereUniqueWithoutMovie_stockInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => RentalCreateManyMovie_stockInputEnvelopeObjectSchema)
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
          z.lazy(
            () => RentalUpdateWithWhereUniqueWithoutMovie_stockInputObjectSchema
          ),
          z
            .lazy(
              () =>
                RentalUpdateWithWhereUniqueWithoutMovie_stockInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RentalUpdateManyWithWhereWithoutMovie_stockInputObjectSchema
          ),
          z
            .lazy(
              () => RentalUpdateManyWithWhereWithoutMovie_stockInputObjectSchema
            )
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

export const RentalUpdateManyWithoutMovie_stockNestedInputObjectSchema = Schema;
