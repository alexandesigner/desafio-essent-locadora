import { z } from 'zod';
import { RentalUpdateInputObjectSchema } from './objects/RentalUpdateInput.schema';
import { RentalUncheckedUpdateInputObjectSchema } from './objects/RentalUncheckedUpdateInput.schema';
import { RentalWhereUniqueInputObjectSchema } from './objects/RentalWhereUniqueInput.schema';

export const RentalUpdateOneSchema = z.object({
  data: z.union([
    RentalUpdateInputObjectSchema,
    RentalUncheckedUpdateInputObjectSchema
  ]),
  where: RentalWhereUniqueInputObjectSchema
});
