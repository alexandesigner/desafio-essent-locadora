import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';
import { EnumMoviePersonTypeFieldUpdateOperationsInputObjectSchema } from './EnumMoviePersonTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonUpdateWithoutCastInput> = z
  .object({
    type: z
      .union([
        z.lazy(() => MoviePersonTypeSchema),
        z.lazy(() => EnumMoviePersonTypeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    avatar: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    full_name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
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
      .optional()
  })
  .strict();

export const MoviePersonUpdateWithoutCastInputObjectSchema = Schema;
