import { z } from 'zod';
import { MoviePersonWhereInputObjectSchema } from './objects/MoviePersonWhereInput.schema';
import { MoviePersonOrderByWithAggregationInputObjectSchema } from './objects/MoviePersonOrderByWithAggregationInput.schema';
import { MoviePersonScalarWhereWithAggregatesInputObjectSchema } from './objects/MoviePersonScalarWhereWithAggregatesInput.schema';
import { MoviePersonScalarFieldEnumSchema } from './enums/MoviePersonScalarFieldEnum.schema';

export const MoviePersonGroupBySchema = z.object({
  where: MoviePersonWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MoviePersonOrderByWithAggregationInputObjectSchema,
      MoviePersonOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: MoviePersonScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MoviePersonScalarFieldEnumSchema)
});
