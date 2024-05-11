import { z } from 'zod';
import { MoviePersonCreateInputObjectSchema } from './objects/MoviePersonCreateInput.schema';
import { MoviePersonUncheckedCreateInputObjectSchema } from './objects/MoviePersonUncheckedCreateInput.schema';

export const MoviePersonCreateOneSchema = z.object({
  data: z.union([
    MoviePersonCreateInputObjectSchema,
    MoviePersonUncheckedCreateInputObjectSchema
  ])
});
