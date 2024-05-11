import { z } from 'zod';
import { MovieUpdateInputObjectSchema } from './objects/MovieUpdateInput.schema';
import { MovieUncheckedUpdateInputObjectSchema } from './objects/MovieUncheckedUpdateInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './objects/MovieWhereUniqueInput.schema';

export const MovieUpdateOneSchema = z.object({
  data: z.union([
    MovieUpdateInputObjectSchema,
    MovieUncheckedUpdateInputObjectSchema
  ]),
  where: MovieWhereUniqueInputObjectSchema
});
