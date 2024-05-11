import { z } from 'zod';
import { MovieCastCreateWithoutPersonInputObjectSchema } from './MovieCastCreateWithoutPersonInput.schema';
import { MovieCastUncheckedCreateWithoutPersonInputObjectSchema } from './MovieCastUncheckedCreateWithoutPersonInput.schema';
import { MovieCastCreateOrConnectWithoutPersonInputObjectSchema } from './MovieCastCreateOrConnectWithoutPersonInput.schema';
import { MovieCastUpsertWithWhereUniqueWithoutPersonInputObjectSchema } from './MovieCastUpsertWithWhereUniqueWithoutPersonInput.schema';
import { MovieCastCreateManyPersonInputEnvelopeObjectSchema } from './MovieCastCreateManyPersonInputEnvelope.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastUpdateWithWhereUniqueWithoutPersonInputObjectSchema } from './MovieCastUpdateWithWhereUniqueWithoutPersonInput.schema';
import { MovieCastUpdateManyWithWhereWithoutPersonInputObjectSchema } from './MovieCastUpdateManyWithWhereWithoutPersonInput.schema';
import { MovieCastScalarWhereInputObjectSchema } from './MovieCastScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUncheckedUpdateManyWithoutPersonNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MovieCastCreateWithoutPersonInputObjectSchema),
          z.lazy(() => MovieCastCreateWithoutPersonInputObjectSchema).array(),
          z.lazy(() => MovieCastUncheckedCreateWithoutPersonInputObjectSchema),
          z
            .lazy(() => MovieCastUncheckedCreateWithoutPersonInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MovieCastCreateOrConnectWithoutPersonInputObjectSchema),
          z
            .lazy(() => MovieCastCreateOrConnectWithoutPersonInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MovieCastUpsertWithWhereUniqueWithoutPersonInputObjectSchema
          ),
          z
            .lazy(
              () => MovieCastUpsertWithWhereUniqueWithoutPersonInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MovieCastCreateManyPersonInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MovieCastUpdateWithWhereUniqueWithoutPersonInputObjectSchema
          ),
          z
            .lazy(
              () => MovieCastUpdateWithWhereUniqueWithoutPersonInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MovieCastUpdateManyWithWhereWithoutPersonInputObjectSchema
          ),
          z
            .lazy(
              () => MovieCastUpdateManyWithWhereWithoutPersonInputObjectSchema
            )
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MovieCastScalarWhereInputObjectSchema),
          z.lazy(() => MovieCastScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict();

export const MovieCastUncheckedUpdateManyWithoutPersonNestedInputObjectSchema =
  Schema;
