import { z } from 'zod';
import { MoviePersonUpdateManyMutationInputObjectSchema } from './objects/MoviePersonUpdateManyMutationInput.schema';
import { MoviePersonWhereInputObjectSchema } from './objects/MoviePersonWhereInput.schema';

export const MoviePersonUpdateManySchema = z.object({
  data: MoviePersonUpdateManyMutationInputObjectSchema,
  where: MoviePersonWhereInputObjectSchema.optional()
});
