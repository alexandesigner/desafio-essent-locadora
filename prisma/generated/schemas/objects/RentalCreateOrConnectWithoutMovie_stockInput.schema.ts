import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './RentalWhereUniqueInput.schema';
import { RentalCreateWithoutMovie_stockInputObjectSchema } from './RentalCreateWithoutMovie_stockInput.schema';
import { RentalUncheckedCreateWithoutMovie_stockInputObjectSchema } from './RentalUncheckedCreateWithoutMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateOrConnectWithoutMovie_stockInput> = z
  .object({
    where: z.lazy(() => RentalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RentalCreateWithoutMovie_stockInputObjectSchema),
      z.lazy(() => RentalUncheckedCreateWithoutMovie_stockInputObjectSchema)
    ])
  })
  .strict();

export const RentalCreateOrConnectWithoutMovie_stockInputObjectSchema = Schema;
