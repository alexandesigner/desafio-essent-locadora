import { z } from 'zod';
import { MovieScalarWhereInputObjectSchema } from './MovieScalarWhereInput.schema';
import { MovieUpdateManyMutationInputObjectSchema } from './MovieUpdateManyMutationInput.schema';
import { MovieUncheckedUpdateManyWithoutMoviesInputObjectSchema } from './MovieUncheckedUpdateManyWithoutMoviesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUpdateManyWithWhereWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => MovieScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MovieUpdateManyMutationInputObjectSchema),
      z.lazy(() => MovieUncheckedUpdateManyWithoutMoviesInputObjectSchema)
    ])
  })
  .strict();

export const MovieUpdateManyWithWhereWithoutCategoryInputObjectSchema = Schema;
