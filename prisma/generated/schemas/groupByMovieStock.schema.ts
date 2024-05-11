import { z } from 'zod';
import { MovieStockWhereInputObjectSchema } from './objects/MovieStockWhereInput.schema';
import { MovieStockOrderByWithAggregationInputObjectSchema } from './objects/MovieStockOrderByWithAggregationInput.schema';
import { MovieStockScalarWhereWithAggregatesInputObjectSchema } from './objects/MovieStockScalarWhereWithAggregatesInput.schema';
import { MovieStockScalarFieldEnumSchema } from './enums/MovieStockScalarFieldEnum.schema';

export const MovieStockGroupBySchema = z.object({
  where: MovieStockWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MovieStockOrderByWithAggregationInputObjectSchema,
      MovieStockOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: MovieStockScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MovieStockScalarFieldEnumSchema)
});
