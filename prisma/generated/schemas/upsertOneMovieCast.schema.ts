import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './objects/MovieCastWhereUniqueInput.schema';
import { MovieCastCreateInputObjectSchema } from './objects/MovieCastCreateInput.schema';
import { MovieCastUncheckedCreateInputObjectSchema } from './objects/MovieCastUncheckedCreateInput.schema';
import { MovieCastUpdateInputObjectSchema } from './objects/MovieCastUpdateInput.schema';
import { MovieCastUncheckedUpdateInputObjectSchema } from './objects/MovieCastUncheckedUpdateInput.schema';

export const MovieCastUpsertSchema = z.object({
  where: MovieCastWhereUniqueInputObjectSchema,
  create: z.union([
    MovieCastCreateInputObjectSchema,
    MovieCastUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    MovieCastUpdateInputObjectSchema,
    MovieCastUncheckedUpdateInputObjectSchema
  ])
});
