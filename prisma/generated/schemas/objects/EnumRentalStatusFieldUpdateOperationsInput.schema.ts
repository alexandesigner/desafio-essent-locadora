import { z } from 'zod';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRentalStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => RentalStatusSchema).optional()
  })
  .strict();

export const EnumRentalStatusFieldUpdateOperationsInputObjectSchema = Schema;
