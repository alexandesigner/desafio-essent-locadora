import { z } from 'zod';
import { MovieCastCreateInputObjectSchema } from './objects/MovieCastCreateInput.schema';
import { MovieCastUncheckedCreateInputObjectSchema } from './objects/MovieCastUncheckedCreateInput.schema';

export const MovieCastCreateOneSchema = z.object({
  data: z.union([
    MovieCastCreateInputObjectSchema,
    MovieCastUncheckedCreateInputObjectSchema
  ])
});
