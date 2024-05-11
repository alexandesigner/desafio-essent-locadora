import { z } from 'zod';
import { MovieOrderByWithRelationInputObjectSchema } from './objects/MovieOrderByWithRelationInput.schema';
import { MovieWhereInputObjectSchema } from './objects/MovieWhereInput.schema';
import { MovieWhereUniqueInputObjectSchema } from './objects/MovieWhereUniqueInput.schema';
import { MovieScalarFieldEnumSchema } from './enums/MovieScalarFieldEnum.schema';

export const MovieFindFirstSchema = z.object({
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
  distinct: z.array(MovieScalarFieldEnumSchema).optional()
});
