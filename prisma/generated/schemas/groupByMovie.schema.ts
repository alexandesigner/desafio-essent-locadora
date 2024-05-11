import { z } from 'zod';
import { MovieWhereInputObjectSchema } from './objects/MovieWhereInput.schema';
import { MovieOrderByWithAggregationInputObjectSchema } from './objects/MovieOrderByWithAggregationInput.schema';
import { MovieScalarWhereWithAggregatesInputObjectSchema } from './objects/MovieScalarWhereWithAggregatesInput.schema';
import { MovieScalarFieldEnumSchema } from './enums/MovieScalarFieldEnum.schema';

export const MovieGroupBySchema = z.object({
  where: MovieWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MovieOrderByWithAggregationInputObjectSchema,
      MovieOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: MovieScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MovieScalarFieldEnumSchema)
});
