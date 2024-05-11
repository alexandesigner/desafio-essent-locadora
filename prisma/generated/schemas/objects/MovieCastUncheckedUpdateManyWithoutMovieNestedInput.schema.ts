import { z } from 'zod';
import { MovieCastCreateWithoutMovieInputObjectSchema } from './MovieCastCreateWithoutMovieInput.schema';
import { MovieCastUncheckedCreateWithoutMovieInputObjectSchema } from './MovieCastUncheckedCreateWithoutMovieInput.schema';
import { MovieCastCreateOrConnectWithoutMovieInputObjectSchema } from './MovieCastCreateOrConnectWithoutMovieInput.schema';
import { MovieCastUpsertWithWhereUniqueWithoutMovieInputObjectSchema } from './MovieCastUpsertWithWhereUniqueWithoutMovieInput.schema';
import { MovieCastCreateManyMovieInputEnvelopeObjectSchema } from './MovieCastCreateManyMovieInputEnvelope.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastUpdateWithWhereUniqueWithoutMovieInputObjectSchema } from './MovieCastUpdateWithWhereUniqueWithoutMovieInput.schema';
import { MovieCastUpdateManyWithWhereWithoutMovieInputObjectSchema } from './MovieCastUpdateManyWithWhereWithoutMovieInput.schema';
import { MovieCastScalarWhereInputObjectSchema } from './MovieCastScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUncheckedUpdateManyWithoutMovieNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MovieCastCreateWithoutMovieInputObjectSchema),
          z.lazy(() => MovieCastCreateWithoutMovieInputObjectSchema).array(),
          z.lazy(() => MovieCastUncheckedCreateWithoutMovieInputObjectSchema),
          z
            .lazy(() => MovieCastUncheckedCreateWithoutMovieInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MovieCastCreateOrConnectWithoutMovieInputObjectSchema),
          z
            .lazy(() => MovieCastCreateOrConnectWithoutMovieInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MovieCastUpsertWithWhereUniqueWithoutMovieInputObjectSchema
          ),
          z
            .lazy(
              () => MovieCastUpsertWithWhereUniqueWithoutMovieInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MovieCastCreateManyMovieInputEnvelopeObjectSchema)
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
            () => MovieCastUpdateWithWhereUniqueWithoutMovieInputObjectSchema
          ),
          z
            .lazy(
              () => MovieCastUpdateWithWhereUniqueWithoutMovieInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MovieCastUpdateManyWithWhereWithoutMovieInputObjectSchema
          ),
          z
            .lazy(
              () => MovieCastUpdateManyWithWhereWithoutMovieInputObjectSchema
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

export const MovieCastUncheckedUpdateManyWithoutMovieNestedInputObjectSchema =
  Schema;
