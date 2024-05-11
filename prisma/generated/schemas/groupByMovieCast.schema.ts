import { z } from 'zod';
import { MovieCastWhereInputObjectSchema } from './objects/MovieCastWhereInput.schema';
import { MovieCastOrderByWithAggregationInputObjectSchema } from './objects/MovieCastOrderByWithAggregationInput.schema';
import { MovieCastScalarWhereWithAggregatesInputObjectSchema } from './objects/MovieCastScalarWhereWithAggregatesInput.schema';
import { MovieCastScalarFieldEnumSchema } from './enums/MovieCastScalarFieldEnum.schema';

export const MovieCastGroupBySchema = z.object({
  where: MovieCastWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MovieCastOrderByWithAggregationInputObjectSchema,
      MovieCastOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: MovieCastScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MovieCastScalarFieldEnumSchema)
});
