import { z } from 'zod';
import { RentalCreateManyMovie_stockInputObjectSchema } from './RentalCreateManyMovie_stockInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateManyMovie_stockInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RentalCreateManyMovie_stockInputObjectSchema),
      z.lazy(() => RentalCreateManyMovie_stockInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const RentalCreateManyMovie_stockInputEnvelopeObjectSchema = Schema;
