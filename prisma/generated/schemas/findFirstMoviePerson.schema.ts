import { z } from 'zod';
import { MoviePersonOrderByWithRelationInputObjectSchema } from './objects/MoviePersonOrderByWithRelationInput.schema';
import { MoviePersonWhereInputObjectSchema } from './objects/MoviePersonWhereInput.schema';
import { MoviePersonWhereUniqueInputObjectSchema } from './objects/MoviePersonWhereUniqueInput.schema';
import { MoviePersonScalarFieldEnumSchema } from './enums/MoviePersonScalarFieldEnum.schema';

export const MoviePersonFindFirstSchema = z.object({
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
  distinct: z.array(MoviePersonScalarFieldEnumSchema).optional()
});
