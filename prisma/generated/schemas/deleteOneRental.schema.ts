import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './objects/RentalWhereUniqueInput.schema';

export const RentalDeleteOneSchema = z.object({
  where: RentalWhereUniqueInputObjectSchema
});
