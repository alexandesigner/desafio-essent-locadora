import { z } from 'zod';
import { RentalCreateManyInputObjectSchema } from './objects/RentalCreateManyInput.schema';

export const RentalCreateManySchema = z.object({
  data: z.union([
    RentalCreateManyInputObjectSchema,
    z.array(RentalCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
