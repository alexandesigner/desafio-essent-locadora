import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './objects/MovieCastWhereUniqueInput.schema';

export const MovieCastFindUniqueSchema = z.object({
  where: MovieCastWhereUniqueInputObjectSchema
});
