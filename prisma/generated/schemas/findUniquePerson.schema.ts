import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonFindUniqueSchema = z.object({
  where: PersonWhereUniqueInputObjectSchema
});
