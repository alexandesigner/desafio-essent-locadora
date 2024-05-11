import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './objects/MovieWhereUniqueInput.schema';

export const MovieFindUniqueSchema = z.object({
  where: MovieWhereUniqueInputObjectSchema
});
