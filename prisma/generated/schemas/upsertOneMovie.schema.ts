import { z } from 'zod';
import { MovieWhereUniqueInputObjectSchema } from './objects/MovieWhereUniqueInput.schema';
import { MovieCreateInputObjectSchema } from './objects/MovieCreateInput.schema';
import { MovieUncheckedCreateInputObjectSchema } from './objects/MovieUncheckedCreateInput.schema';
import { MovieUpdateInputObjectSchema } from './objects/MovieUpdateInput.schema';
import { MovieUncheckedUpdateInputObjectSchema } from './objects/MovieUncheckedUpdateInput.schema';

export const MovieUpsertSchema = z.object({
  where: MovieWhereUniqueInputObjectSchema,
  create: z.union([
    MovieCreateInputObjectSchema,
    MovieUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    MovieUpdateInputObjectSchema,
    MovieUncheckedUpdateInputObjectSchema
  ])
});
