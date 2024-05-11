import { z } from 'zod';
import { MovieOrderByWithRelationInputObjectSchema } from './objects/MovieOrderByWithRelationInput.schema';
import { MovieWhereInputObjectSchema } from './objects/MovieWhereInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './objects/MovieWhereUniqueInput.schema';
import { MovieCountAggregateInputObjectSchema } from './objects/MovieCountAggregateInput.schema';
import { MovieMinAggregateInputObjectSchema } from './objects/MovieMinAggregateInput.schema';
import { MovieMaxAggregateInputObjectSchema } from './objects/MovieMaxAggregateInput.schema';
import { MovieAvgAggregateInputObjectSchema } from './objects/MovieAvgAggregateInput.schema';
import { MovieSumAggregateInputObjectSchema } from './objects/MovieSumAggregateInput.schema';

export const MovieAggregateSchema = z.object({
  orderBy: z
    .union([
      MovieOrderByWithRelationInputObjectSchema,
      MovieOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: MovieWhereInputObjectSchema.optional(),
  cursor: MovieWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MovieCountAggregateInputObjectSchema])
    .optional(),
  _min: MovieMinAggregateInputObjectSchema.optional(),
  _max: MovieMaxAggregateInputObjectSchema.optional(),
  _avg: MovieAvgAggregateInputObjectSchema.optional(),
  _sum: MovieSumAggregateInputObjectSchema.optional()
});
