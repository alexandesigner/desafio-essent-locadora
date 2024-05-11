import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneRequiredWithoutMoviesNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutMoviesNestedInput.schema';
import { MovieCastUpdateManyWithoutMovieNestedInputObjectSchema } from './MovieCastUpdateManyWithoutMovieNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpdateWithoutStockInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    release_year: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    featured_image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    thumb_image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    synopsis: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    rental_value: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)
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
      .optional(),
    category: z
      .lazy(() => CategoryUpdateOneRequiredWithoutMoviesNestedInputObjectSchema)
      .optional(),
    cast: z
      .lazy(() => MovieCastUpdateManyWithoutMovieNestedInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieUpdateWithoutStockInputObjectSchema = Schema;
