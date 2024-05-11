import { z } from 'zod';
import { PersonCreateInputObjectSchema } from './objects/PersonCreateInput.schema';
import { PersonUncheckedCreateInputObjectSchema } from './objects/PersonUncheckedCreateInput.schema';

export const PersonCreateOneSchema = z.object({
  data: z.union([
    PersonCreateInputObjectSchema,
    PersonUncheckedCreateInputObjectSchema
  ])
});
