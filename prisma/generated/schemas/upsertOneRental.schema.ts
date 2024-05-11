import { z } from 'zod';
import { RentalWhereUniqueInputObjectSchema } from './objects/RentalWhereUniqueInput.schema';
import { RentalCreateInputObjectSchema } from './objects/RentalCreateInput.schema';
import { RentalUncheckedCreateInputObjectSchema } from './objects/RentalUncheckedCreateInput.schema';
import { RentalUpdateInputObjectSchema } from './objects/RentalUpdateInput.schema';
import { RentalUncheckedUpdateInputObjectSchema } from './objects/RentalUncheckedUpdateInput.schema';

export const RentalUpsertSchema = z.object({
  where: RentalWhereUniqueInputObjectSchema,
  create: z.union([
    RentalCreateInputObjectSchema,
    RentalUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    RentalUpdateInputObjectSchema,
    RentalUncheckedUpdateInputObjectSchema
  ])
});
