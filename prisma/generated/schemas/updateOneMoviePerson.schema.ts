import { z } from 'zod';
import { MoviePersonUpdateInputObjectSchema } from './objects/MoviePersonUpdateInput.schema';
import { MoviePersonUncheckedUpdateInputObjectSchema } from './objects/MoviePersonUncheckedUpdateInput.schema';
import { MoviePersonWhereUniqueInputObjectSchema } from './objects/MoviePersonWhereUniqueInput.schema';

export const MoviePersonUpdateOneSchema = z.object({
  data: z.union([
    MoviePersonUpdateInputObjectSchema,
    MoviePersonUncheckedUpdateInputObjectSchema
  ]),
  where: MoviePersonWhereUniqueInputObjectSchema
});
