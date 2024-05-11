import { z } from 'zod';
import { MoviePersonWhereUniqueInputObjectSchema } from './objects/MoviePersonWhereUniqueInput.schema';

export const MoviePersonFindUniqueSchema = z.object({
  where: MoviePersonWhereUniqueInputObjectSchema
});
