import { z } from 'zod';
import { RentalWhereInputObjectSchema } from './RentalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalListRelationFilter> = z
  .object({
    every: z.lazy(() => RentalWhereInputObjectSchema).optional(),
    some: z.lazy(() => RentalWhereInputObjectSchema).optional(),
    none: z.lazy(() => RentalWhereInputObjectSchema).optional()
  })
  .strict();

export const RentalListRelationFilterObjectSchema = Schema;
