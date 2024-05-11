import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalUpdateWithoutMovie_stockInputObjectSchema } from './RentalUpdateWithoutMovie_stockInput.schema';
import { RentalUncheckedUpdateWithoutMovie_stockInputObjectSchema } from './RentalUncheckedUpdateWithoutMovie_stockInput.schema';
import { RentalCreateWithoutMovie_stockInputObjectSchema } from './RentalCreateWithoutMovie_stockInput.schema';
import { RentalUncheckedCreateWithoutMovie_stockInputObjectSchema } from './RentalUncheckedCreateWithoutMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpsertWithWhereUniqueWithoutMovie_stockInput> =
  z
    .object({
      where: z.lazy(() => RentalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RentalUpdateWithoutMovie_stockInputObjectSchema),
        z.lazy(() => RentalUncheckedUpdateWithoutMovie_stockInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => RentalCreateWithoutMovie_stockInputObjectSchema),
        z.lazy(() => RentalUncheckedCreateWithoutMovie_stockInputObjectSchema)
      ])
    })
    .strict();

export const RentalUpsertWithWhereUniqueWithoutMovie_stockInputObjectSchema =
  Schema;
