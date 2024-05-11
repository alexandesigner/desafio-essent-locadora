import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './objects/MovieCastWhereUniqueInput.schema';

export const MovieCastDeleteOneSchema = z.object({
  where: MovieCastWhereUniqueInputObjectSchema
});
