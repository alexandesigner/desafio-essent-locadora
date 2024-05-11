import { z } from 'zod';
import { MovieWhereInputObjectSchema } from './objects/MovieWhereInput.schema';

export const MovieDeleteManySchema = z.object({
  where: MovieWhereInputObjectSchema.optional()
});
