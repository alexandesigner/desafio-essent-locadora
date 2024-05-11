import { z } from 'zod';
import { MoviePersonWhereInputObjectSchema } from './objects/MoviePersonWhereInput.schema';

export const MoviePersonDeleteManySchema = z.object({
  where: MoviePersonWhereInputObjectSchema.optional()
});
