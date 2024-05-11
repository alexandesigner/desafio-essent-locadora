import { z } from 'zod';
import { RentalCreateInputObjectSchema } from './objects/RentalCreateInput.schema';
import { RentalUncheckedCreateInputObjectSchema } from './objects/RentalUncheckedCreateInput.schema';

export const RentalCreateOneSchema = z.object({
  data: z.union([
    RentalCreateInputObjectSchema,
    RentalUncheckedCreateInputObjectSchema
  ])
});
