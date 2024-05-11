import { z } from 'zod';
import { MovieStockUpdateManyMutationInputObjectSchema } from './objects/MovieStockUpdateManyMutationInput.schema';
import { MovieStockWhereInputObjectSchema } from './objects/MovieStockWhereInput.schema';

export const MovieStockUpdateManySchema = z.object({
  data: MovieStockUpdateManyMutationInputObjectSchema,
  where: MovieStockWhereInputObjectSchema.optional()
});
