import { z } from 'zod';
import { RentalWhereInputObjectSchema } from './objects/RentalWhereInput.schema';
import { RentalOrderByWithAggregationInputObjectSchema } from './objects/RentalOrderByWithAggregationInput.schema';
import { RentalScalarWhereWithAggregatesInputObjectSchema } from './objects/RentalScalarWhereWithAggregatesInput.schema';
import { RentalScalarFieldEnumSchema } from './enums/RentalScalarFieldEnum.schema';

export const RentalGroupBySchema = z.object({
  where: RentalWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RentalOrderByWithAggregationInputObjectSchema,
      RentalOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: RentalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RentalScalarFieldEnumSchema)
});
