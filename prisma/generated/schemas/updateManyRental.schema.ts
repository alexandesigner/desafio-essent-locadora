import { z } from 'zod';
import { RentalUpdateManyMutationInputObjectSchema } from './objects/RentalUpdateManyMutationInput.schema';
import { RentalWhereInputObjectSchema } from './objects/RentalWhereInput.schema';

export const RentalUpdateManySchema = z.object({
  data: RentalUpdateManyMutationInputObjectSchema,
  where: RentalWhereInputObjectSchema.optional()
});
