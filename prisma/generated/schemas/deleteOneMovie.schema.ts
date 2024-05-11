import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './objects/MovieWhereUniqueInput.schema';

export const MovieDeleteOneSchema = z.object({
  where: MovieWhereUniqueInputObjectSchema
});
