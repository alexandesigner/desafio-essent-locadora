import { z } from 'zod';
import { MovieStockOrderByWithRelationInputObjectSchema } from './objects/MovieStockOrderByWithRelationInput.schema';
import { MovieStockWhereInputObjectSchema } from './objects/MovieStockWhereInput.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './objects/MovieStockWhereUniqueInput.schema';
import { MovieStockCountAggregateInputObjectSchema } from './objects/MovieStockCountAggregateInput.schema';
import { MovieStockMinAggregateInputObjectSchema } from './objects/MovieStockMinAggregateInput.schema';
import { MovieStockMaxAggregateInputObjectSchema } from './objects/MovieStockMaxAggregateInput.schema';
import { MovieStockAvgAggregateInputObjectSchema } from './objects/MovieStockAvgAggregateInput.schema';
import { MovieStockSumAggregateInputObjectSchema } from './objects/MovieStockSumAggregateInput.schema';

export const MovieStockAggregateSchema = z.object({
  orderBy: z
    .union([
      MovieStockOrderByWithRelationInputObjectSchema,
      MovieStockOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: MovieStockWhereInputObjectSchema.optional(),
  cursor: MovieStockWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MovieStockCountAggregateInputObjectSchema])
    .optional(),
  _min: MovieStockMinAggregateInputObjectSchema.optional(),
  _max: MovieStockMaxAggregateInputObjectSchema.optional(),
  _avg: MovieStockAvgAggregateInputObjectSchema.optional(),
  _sum: MovieStockSumAggregateInputObjectSchema.optional()
});
