import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './objects/MovieStockWhereUniqueInput.schema';

export const MovieStockDeleteOneSchema = z.object({
  where: MovieStockWhereUniqueInputObjectSchema
});
