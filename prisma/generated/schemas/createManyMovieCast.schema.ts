import { z } from 'zod';
import { MovieCastCreateManyInputObjectSchema } from './objects/MovieCastCreateManyInput.schema';

export const MovieCastCreateManySchema = z.object({
  data: z.union([
    MovieCastCreateManyInputObjectSchema,
    z.array(MovieCastCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
