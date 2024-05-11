import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './objects/RentalWhereUniqueInput.schema';

export const RentalFindUniqueSchema = z.object({
  where: RentalWhereUniqueInputObjectSchema
});
