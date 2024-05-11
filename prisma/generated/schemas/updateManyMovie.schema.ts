import { z } from 'zod';
import { MovieUpdateManyMutationInputObjectSchema } from './objects/MovieUpdateManyMutationInput.schema';
import { MovieWhereInputObjectSchema } from './objects/MovieWhereInput.schema';

export const MovieUpdateManySchema = z.object({
  data: MovieUpdateManyMutationInputObjectSchema,
  where: MovieWhereInputObjectSchema.optional()
});
