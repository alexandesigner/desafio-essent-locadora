import { z } from 'zod';
import { MovieCastUpdateInputObjectSchema } from './objects/MovieCastUpdateInput.schema';
import { MovieCastUncheckedUpdateInputObjectSchema } from './objects/MovieCastUncheckedUpdateInput.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './objects/MovieCastWhereUniqueInput.schema';

export const MovieCastUpdateOneSchema = z.object({
  data: z.union([
    MovieCastUpdateInputObjectSchema,
    MovieCastUncheckedUpdateInputObjectSchema
  ]),
  where: MovieCastWhereUniqueInputObjectSchema
});
