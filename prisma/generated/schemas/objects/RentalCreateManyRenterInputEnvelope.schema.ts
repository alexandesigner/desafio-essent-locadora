import { z } from 'zod';
import { RentalCreateManyRenterInputObjectSchema } from './RentalCreateManyRenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateManyRenterInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RentalCreateManyRenterInputObjectSchema),
      z.lazy(() => RentalCreateManyRenterInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const RentalCreateManyRenterInputEnvelopeObjectSchema = Schema;
