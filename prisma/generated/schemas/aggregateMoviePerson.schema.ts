import { z } from 'zod';
import { MoviePersonOrderByWithRelationInputObjectSchema } from './objects/MoviePersonOrderByWithRelationInput.schema';
import { MoviePersonWhereInputObjectSchema } from './objects/MoviePersonWhereInput.schema';
import { MoviePersonWhereUniqueInputObjectSchema } from './objects/MoviePersonWhereUniqueInput.schema';
import { MoviePersonCountAggregateInputObjectSchema } from './objects/MoviePersonCountAggregateInput.schema';
import { MoviePersonMinAggregateInputObjectSchema } from './objects/MoviePersonMinAggregateInput.schema';
import { MoviePersonMaxAggregateInputObjectSchema } from './objects/MoviePersonMaxAggregateInput.schema';
import { MoviePersonAvgAggregateInputObjectSchema } from './objects/MoviePersonAvgAggregateInput.schema';
import { MoviePersonSumAggregateInputObjectSchema } from './objects/MoviePersonSumAggregateInput.schema';

export const MoviePersonAggregateSchema = z.object({
  orderBy: z
    .union([
      MoviePersonOrderByWithRelationInputObjectSchema,
      MoviePersonOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: MoviePersonWhereInputObjectSchema.optional(),
  cursor: MoviePersonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MoviePersonCountAggregateInputObjectSchema])
    .optional(),
  _min: MoviePersonMinAggregateInputObjectSchema.optional(),
  _max: MoviePersonMaxAggregateInputObjectSchema.optional(),
  _avg: MoviePersonAvgAggregateInputObjectSchema.optional(),
  _sum: MoviePersonSumAggregateInputObjectSchema.optional()
});
