import { z } from 'zod';
import { RentalOrderByWithRelationInputObjectSchema } from './objects/RentalOrderByWithRelationInput.schema';
import { RentalWhereInputObjectSchema } from './objects/RentalWhereInput.schema';
import { RentalWhereUniqueInputObjectSchema } from './objects/RentalWhereUniqueInput.schema';
import { RentalCountAggregateInputObjectSchema } from './objects/RentalCountAggregateInput.schema';
import { RentalMinAggregateInputObjectSchema } from './objects/RentalMinAggregateInput.schema';
import { RentalMaxAggregateInputObjectSchema } from './objects/RentalMaxAggregateInput.schema';
import { RentalAvgAggregateInputObjectSchema } from './objects/RentalAvgAggregateInput.schema';
import { RentalSumAggregateInputObjectSchema } from './objects/RentalSumAggregateInput.schema';

export const RentalAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), RentalCountAggregateInputObjectSchema])
    .optional(),
  _min: RentalMinAggregateInputObjectSchema.optional(),
  _max: RentalMaxAggregateInputObjectSchema.optional(),
  _avg: RentalAvgAggregateInputObjectSchema.optional(),
  _sum: RentalSumAggregateInputObjectSchema.optional()
});
