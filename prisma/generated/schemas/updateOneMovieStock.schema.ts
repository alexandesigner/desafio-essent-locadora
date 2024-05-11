import { z } from 'zod';
import { MovieStockUpdateInputObjectSchema } from './objects/MovieStockUpdateInput.schema';
import { MovieStockUncheckedUpdateInputObjectSchema } from './objects/MovieStockUncheckedUpdateInput.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './objects/MovieStockWhereUniqueInput.schema';

export const MovieStockUpdateOneSchema = z.object({
  data: z.union([
    MovieStockUpdateInputObjectSchema,
    MovieStockUncheckedUpdateInputObjectSchema
  ]),
  where: MovieStockWhereUniqueInputObjectSchema
});
