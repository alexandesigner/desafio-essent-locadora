import { z } from 'zod';
import { MovieStockOrderByWithRelationInputObjectSchema } from './objects/MovieStockOrderByWithRelationInput.schema';
import { MovieStockWhereInputObjectSchema } from './objects/MovieStockWhereInput.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './objects/MovieStockWhereUniqueInput.schema';
import { MovieStockScalarFieldEnumSchema } from './enums/MovieStockScalarFieldEnum.schema';

export const MovieStockFindFirstSchema = z.object({
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
  distinct: z.array(MovieStockScalarFieldEnumSchema).optional()
});
