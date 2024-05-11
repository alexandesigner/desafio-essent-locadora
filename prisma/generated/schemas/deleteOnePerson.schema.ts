import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonDeleteOneSchema = z.object({
  where: PersonWhereUniqueInputObjectSchema
});
