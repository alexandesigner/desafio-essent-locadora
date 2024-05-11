import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMoviePersonTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => MoviePersonTypeSchema).optional()
    })
    .strict();

export const EnumMoviePersonTypeFieldUpdateOperationsInputObjectSchema = Schema;
