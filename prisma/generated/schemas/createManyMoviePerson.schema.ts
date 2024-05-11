import { z } from 'zod';
import { MoviePersonCreateManyInputObjectSchema } from './objects/MoviePersonCreateManyInput.schema';

export const MoviePersonCreateManySchema = z.object({
  data: z.union([
    MoviePersonCreateManyInputObjectSchema,
    z.array(MoviePersonCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
