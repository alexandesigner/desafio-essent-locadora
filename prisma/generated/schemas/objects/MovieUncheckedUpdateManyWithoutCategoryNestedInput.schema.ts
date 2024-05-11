import { z } from 'zod';
import { MovieCreateWithoutCategoryInputObjectSchema } from './MovieCreateWithoutCategoryInput.schema';
import { MovieUncheckedCreateWithoutCategoryInputObjectSchema } from './MovieUncheckedCreateWithoutCategoryInput.schema';
import { MovieCreateOrConnectWithoutCategoryInputObjectSchema } from './MovieCreateOrConnectWithoutCategoryInput.schema';
import { MovieUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './MovieUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { MovieCreateManyCategoryInputEnvelopeObjectSchema } from './MovieCreateManyCategoryInputEnvelope.schema';
import { MovieWhereUniqueInputObjectSchema } from './MovieWhereUniqueInput.schema';
import { MovieUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './MovieUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { MovieUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './MovieUpdateManyWithWhereWithoutCategoryInput.schema';
import { MovieScalarWhereInputObjectSchema } from './MovieScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => MovieUpsertWithWhereUniqueWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => MovieUpsertWithWhereUniqueWithoutCategoryInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MovieCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MovieWhereUniqueInputObjectSchema),
          z.lazy(() => MovieWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MovieWhereUniqueInputObjectSchema),
          z.lazy(() => MovieWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MovieWhereUniqueInputObjectSchema),
          z.lazy(() => MovieWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovieWhereUniqueInputObjectSchema),
          z.lazy(() => MovieWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MovieUpdateWithWhereUniqueWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => MovieUpdateWithWhereUniqueWithoutCategoryInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MovieUpdateManyWithWhereWithoutCategoryInputObjectSchema
          ),
          z
            .lazy(
              () => MovieUpdateManyWithWhereWithoutCategoryInputObjectSchema
            )
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MovieScalarWhereInputObjectSchema),
          z.lazy(() => MovieScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict();

export const MovieUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
