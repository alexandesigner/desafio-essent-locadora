import { z } from 'zod';
import { MoviePersonWhereUniqueInputObjectSchema } from './objects/MoviePersonWhereUniqueInput.schema';
import { MoviePersonCreateInputObjectSchema } from './objects/MoviePersonCreateInput.schema';
import { MoviePersonUncheckedCreateInputObjectSchema } from './objects/MoviePersonUncheckedCreateInput.schema';
import { MoviePersonUpdateInputObjectSchema } from './objects/MoviePersonUpdateInput.schema';
import { MoviePersonUncheckedUpdateInputObjectSchema } from './objects/MoviePersonUncheckedUpdateInput.schema';

export const MoviePersonUpsertSchema = z.object({
  where: MoviePersonWhereUniqueInputObjectSchema,
  create: z.union([
    MoviePersonCreateInputObjectSchema,
    MoviePersonUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    MoviePersonUpdateInputObjectSchema,
    MoviePersonUncheckedUpdateInputObjectSchema
  ])
});
