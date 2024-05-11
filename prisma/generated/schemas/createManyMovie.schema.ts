import { z } from 'zod';
import { MovieCreateManyInputObjectSchema } from './objects/MovieCreateManyInput.schema';

export const MovieCreateManySchema = z.object({
  data: z.union([
    MovieCreateManyInputObjectSchema,
    z.array(MovieCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
