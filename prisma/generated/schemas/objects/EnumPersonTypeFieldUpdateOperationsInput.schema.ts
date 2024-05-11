import { z } from 'zod';
import { PersonTypeSchema } from '../enums/PersonType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPersonTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PersonTypeSchema).optional()
  })
  .strict();

export const EnumPersonTypeFieldUpdateOperationsInputObjectSchema = Schema;
