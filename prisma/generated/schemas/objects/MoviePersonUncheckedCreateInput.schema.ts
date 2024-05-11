import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';
import { MovieCastUncheckedCreateNestedManyWithoutPersonInputObjectSchema } from './MovieCastUncheckedCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    type: z.lazy(() => MoviePersonTypeSchema),
    avatar: z.string().optional().nullable(),
    full_name: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    cast: z
      .lazy(
        () => MovieCastUncheckedCreateNestedManyWithoutPersonInputObjectSchema
      )
      .optional()
  })
  .strict();

export const MoviePersonUncheckedCreateInputObjectSchema = Schema;
