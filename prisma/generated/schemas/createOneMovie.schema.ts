import { z } from 'zod';
import { MovieCreateInputObjectSchema } from './objects/MovieCreateInput.schema';
import { MovieUncheckedCreateInputObjectSchema } from './objects/MovieUncheckedCreateInput.schema';

export const MovieCreateOneSchema = z.object({
  data: z.union([
    MovieCreateInputObjectSchema,
    MovieUncheckedCreateInputObjectSchema
  ])
});
