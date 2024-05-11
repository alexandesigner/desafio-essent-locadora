import { z } from 'zod';
import { RentalWhereInputObjectSchema } from './objects/RentalWhereInput.schema';

export const RentalDeleteManySchema = z.object({
  where: RentalWhereInputObjectSchema.optional()
});
