import { z } from 'zod';
import { MovieStockCreateManyInputObjectSchema } from './objects/MovieStockCreateManyInput.schema';

export const MovieStockCreateManySchema = z.object({
  data: z.union([
    MovieStockCreateManyInputObjectSchema,
    z.array(MovieStockCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
