import { z } from 'zod';
import { MovieCastOrderByWithRelationInputObjectSchema } from './objects/MovieCastOrderByWithRelationInput.schema';
import { MovieCastWhereInputObjectSchema } from './objects/MovieCastWhereInput.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './objects/MovieCastWhereUniqueInput.schema';
import { MovieCastScalarFieldEnumSchema } from './enums/MovieCastScalarFieldEnum.schema';

export const MovieCastFindFirstSchema = z.object({
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
  distinct: z.array(MovieCastScalarFieldEnumSchema).optional()
});
