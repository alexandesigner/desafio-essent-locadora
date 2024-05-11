import { z } from 'zod';
import { PersonOrderByWithRelationInputObjectSchema } from './objects/PersonOrderByWithRelationInput.schema';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';
import { PersonScalarFieldEnumSchema } from './enums/PersonScalarFieldEnum.schema';

export const PersonFindManySchema = z.object({
  orderBy: z
    .union([
      PersonOrderByWithRelationInputObjectSchema,
      PersonOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: PersonWhereInputObjectSchema.optional(),
  cursor: PersonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PersonScalarFieldEnumSchema).optional()
});
