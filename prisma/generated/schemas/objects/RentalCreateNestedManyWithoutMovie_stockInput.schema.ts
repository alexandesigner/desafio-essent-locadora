import { z } from 'zod';
import { RentalCreateWithoutMovie_stockInputObjectSchema } from './RentalCreateWithoutMovie_stockInput.schema';
import { RentalUncheckedCreateWithoutMovie_stockInputObjectSchema } from './RentalUncheckedCreateWithoutMovie_stockInput.schema';
import { RentalCreateOrConnectWithoutMovie_stockInputObjectSchema } from './RentalCreateOrConnectWithoutMovie_stockInput.schema';
import { RentalCreateManyMovie_stockInputEnvelopeObjectSchema } from './RentalCreateManyMovie_stockInputEnvelope.schema';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateNestedManyWithoutMovie_stockInput> =
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
      createMany: z
        .lazy(() => RentalCreateManyMovie_stockInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RentalWhereUniqueInputObjectSchema),
          z.lazy(() => RentalWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict();

export const RentalCreateNestedManyWithoutMovie_stockInputObjectSchema = Schema;
