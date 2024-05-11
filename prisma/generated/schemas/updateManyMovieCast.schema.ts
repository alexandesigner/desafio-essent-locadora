import { z } from 'zod';
import { MovieCastUpdateManyMutationInputObjectSchema } from './objects/MovieCastUpdateManyMutationInput.schema';
import { MovieCastWhereInputObjectSchema } from './objects/MovieCastWhereInput.schema';

export const MovieCastUpdateManySchema = z.object({
  data: MovieCastUpdateManyMutationInputObjectSchema,
  where: MovieCastWhereInputObjectSchema.optional()
});
