import { z } from 'zod';
import { MoviePersonWhereUniqueInputObjectSchema } from './objects/MoviePersonWhereUniqueInput.schema';

export const MoviePersonDeleteOneSchema = z.object({
  where: MoviePersonWhereUniqueInputObjectSchema
});
