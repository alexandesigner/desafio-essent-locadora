import { z } from 'zod';
import { MovieCastWhereInputObjectSchema } from './objects/MovieCastWhereInput.schema';

export const MovieCastDeleteManySchema = z.object({
  where: MovieCastWhereInputObjectSchema.optional()
});
