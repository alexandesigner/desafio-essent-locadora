import { z } from 'zod';
import { MovieStockWhereUniqueInputObjectSchema } from './objects/MovieStockWhereUniqueInput.schema';
import { MovieStockCreateInputObjectSchema } from './objects/MovieStockCreateInput.schema';
import { MovieStockUncheckedCreateInputObjectSchema } from './objects/MovieStockUncheckedCreateInput.schema';
import { MovieStockUpdateInputObjectSchema } from './objects/MovieStockUpdateInput.schema';
import { MovieStockUncheckedUpdateInputObjectSchema } from './objects/MovieStockUncheckedUpdateInput.schema';

export const MovieStockUpsertSchema = z.object({
  where: MovieStockWhereUniqueInputObjectSchema,
  create: z.union([
    MovieStockCreateInputObjectSchema,
    MovieStockUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    MovieStockUpdateInputObjectSchema,
    MovieStockUncheckedUpdateInputObjectSchema
  ])
});
