import { z } from 'zod';
import { PersonUpdateInputObjectSchema } from './objects/PersonUpdateInput.schema';
import { PersonUncheckedUpdateInputObjectSchema } from './objects/PersonUncheckedUpdateInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonUpdateOneSchema = z.object({
  data: z.union([
    PersonUpdateInputObjectSchema,
    PersonUncheckedUpdateInputObjectSchema
  ]),
  where: PersonWhereUniqueInputObjectSchema
});
