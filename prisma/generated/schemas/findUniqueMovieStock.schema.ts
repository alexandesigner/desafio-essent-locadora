import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './objects/MovieStockWhereUniqueInput.schema';

export const MovieStockFindUniqueSchema = z.object({
  where: MovieStockWhereUniqueInputObjectSchema
});
