import { z } from 'zod';
import { RentalOrderByWithRelationInputObjectSchema } from './objects/RentalOrderByWithRelationInput.schema';
import { RentalWhereInputObjectSchema } from './objects/RentalWhereInput.schema';
import { RentalWhereUniqueInputObjectSchema } from './objects/RentalWhereUniqueInput.schema';
import { RentalScalarFieldEnumSchema } from './enums/RentalScalarFieldEnum.schema';

export const RentalFindManySchema = z.object({
  orderBy: z
    .union([
      RentalOrderByWithRelationInputObjectSchema,
      RentalOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: RentalWhereInputObjectSchema.optional(),
  cursor: RentalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RentalScalarFieldEnumSchema).optional()
});
