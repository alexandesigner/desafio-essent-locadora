import { z } from 'zod';
import { MovieStockCreateWithoutMovieInputObjectSchema } from './MovieStockCreateWithoutMovieInput.schema';
import { MovieStockUncheckedCreateWithoutMovieInputObjectSchema } from './MovieStockUncheckedCreateWithoutMovieInput.schema';
import { MovieStockCreateOrConnectWithoutMovieInputObjectSchema } from './MovieStockCreateOrConnectWithoutMovieInput.schema';
import { MovieStockUpsertWithWhereUniqueWithoutMovieInputObjectSchema } from './MovieStockUpsertWithWhereUniqueWithoutMovieInput.schema';
import { MovieStockCreateManyMovieInputEnvelopeObjectSchema } from './MovieStockCreateManyMovieInputEnvelope.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';
import { MovieStockUpdateWithWhereUniqueWithoutMovieInputObjectSchema } from './MovieStockUpdateWithWhereUniqueWithoutMovieInput.schema';
import { MovieStockUpdateManyWithWhereWithoutMovieInputObjectSchema } from './MovieStockUpdateManyWithWhereWithoutMovieInput.schema';
import { MovieStockScalarWhereInputObjectSchema } from './MovieStockScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockUncheckedUpdateManyWithoutMovieNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MovieStockCreateWithoutMovieInputObjectSchema),
          z.lazy(() => MovieStockCreateWithoutMovieInputObjectSchema).array(),
          z.lazy(() => MovieStockUncheckedCreateWithoutMovieInputObjectSchema),
          z
            .lazy(() => MovieStockUncheckedCreateWithoutMovieInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MovieStockCreateOrConnectWithoutMovieInputObjectSchema),
          z
            .lazy(() => MovieStockCreateOrConnectWithoutMovieInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MovieStockUpsertWithWhereUniqueWithoutMovieInputObjectSchema
          ),
          z
            .lazy(
              () => MovieStockUpsertWithWhereUniqueWithoutMovieInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MovieStockCreateManyMovieInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
          z.lazy(() => MovieStockWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MovieStockUpdateWithWhereUniqueWithoutMovieInputObjectSchema
          ),
          z
            .lazy(
              () => MovieStockUpdateWithWhereUniqueWithoutMovieInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MovieStockUpdateManyWithWhereWithoutMovieInputObjectSchema
          ),
          z
            .lazy(
              () => MovieStockUpdateManyWithWhereWithoutMovieInputObjectSchema
            )
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MovieStockScalarWhereInputObjectSchema),
          z.lazy(() => MovieStockScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict();

export const MovieStockUncheckedUpdateManyWithoutMovieNestedInputObjectSchema =
  Schema;
