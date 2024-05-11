import { z } from 'zod';
import { MovieCreateWithoutCategoryInputObjectSchema } from './MovieCreateWithoutCategoryInput.schema';
import { MovieUncheckedCreateWithoutCategoryInputObjectSchema } from './MovieUncheckedCreateWithoutCategoryInput.schema';
import { MovieCreateOrConnectWithoutCategoryInputObjectSchema } from './MovieCreateOrConnectWithoutCategoryInput.schema';
import { MovieCreateManyCategoryInputEnvelopeObjectSchema } from './MovieCreateManyCategoryInputEnvelope.schema';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateNestedManyWithoutCategoryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MovieCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => MovieCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => MovieUncheckedCreateWithoutCategoryInputObjectSchema),
        z
          .lazy(() => MovieUncheckedCreateWithoutCategoryInputObjectSchema)
          .array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MovieCreateOrConnectWithoutCategoryInputObjectSchema),
        z
          .lazy(() => MovieCreateOrConnectWithoutCategoryInputObjectSchema)
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => MovieCreateManyCategoryInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MovieWhereUniqueInputObjectSchema),
        z.lazy(() => MovieWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const MovieCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
