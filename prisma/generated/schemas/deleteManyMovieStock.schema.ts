import { z } from 'zod';
import { MovieStockWhereInputObjectSchema } from './objects/MovieStockWhereInput.schema';

export const MovieStockDeleteManySchema = z.object({
  where: MovieStockWhereInputObjectSchema.optional()
});
