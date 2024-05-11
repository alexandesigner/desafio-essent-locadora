import { z } from 'zod';
import { MovieStockCreateInputObjectSchema } from './objects/MovieStockCreateInput.schema';
import { MovieStockUncheckedCreateInputObjectSchema } from './objects/MovieStockUncheckedCreateInput.schema';

export const MovieStockCreateOneSchema = z.object({
  data: z.union([
    MovieStockCreateInputObjectSchema,
    MovieStockUncheckedCreateInputObjectSchema
  ])
});
