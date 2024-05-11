import { z } from 'zod';
import { MovieCastOrderByWithRelationInputObjectSchema } from './objects/MovieCastOrderByWithRelationInput.schema';
import { MovieCastWhereInputObjectSchema } from './objects/MovieCastWhereInput.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './objects/MovieCastWhereUniqueInput.schema';
import { MovieCastCountAggregateInputObjectSchema } from './objects/MovieCastCountAggregateInput.schema';
import { MovieCastMinAggregateInputObjectSchema } from './objects/MovieCastMinAggregateInput.schema';
import { MovieCastMaxAggregateInputObjectSchema } from './objects/MovieCastMaxAggregateInput.schema';
import { MovieCastAvgAggregateInputObjectSchema } from './objects/MovieCastAvgAggregateInput.schema';
import { MovieCastSumAggregateInputObjectSchema } from './objects/MovieCastSumAggregateInput.schema';

export const MovieCastAggregateSchema = z.object({
  orderBy: z
    .union([
      MovieCastOrderByWithRelationInputObjectSchema,
      MovieCastOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: MovieCastWhereInputObjectSchema.optional(),
  cursor: MovieCastWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MovieCastCountAggregateInputObjectSchema])
    .optional(),
  _min: MovieCastMinAggregateInputObjectSchema.optional(),
  _max: MovieCastMaxAggregateInputObjectSchema.optional(),
  _avg: MovieCastAvgAggregateInputObjectSchema.optional(),
  _sum: MovieCastSumAggregateInputObjectSchema.optional()
});
