import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalUpdateWithoutMovie_stockInputObjectSchema } from './RentalUpdateWithoutMovie_stockInput.schema';
import { RentalUncheckedUpdateWithoutMovie_stockInputObjectSchema } from './RentalUncheckedUpdateWithoutMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateWithWhereUniqueWithoutMovie_stockInput> =
  z
    .object({
      where: z.lazy(() => RentalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RentalUpdateWithoutMovie_stockInputObjectSchema),
        z.lazy(() => RentalUncheckedUpdateWithoutMovie_stockInputObjectSchema)
      ])
    })
    .strict();

export const RentalUpdateWithWhereUniqueWithoutMovie_stockInputObjectSchema =
  Schema;
