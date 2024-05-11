import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MoviePersonUpdateOneRequiredWithoutCastNestedInputObjectSchema } from './MoviePersonUpdateOneRequiredWithoutCastNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUpdateWithoutMovieInput> = z
  .object({
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    updated_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    person: z
      .lazy(
        () => MoviePersonUpdateOneRequiredWithoutCastNestedInputObjectSchema
      )
      .optional()
  })
  .strict();

export const MovieCastUpdateWithoutMovieInputObjectSchema = Schema;
