import { z } from 'zod';
import { MovieCastCreateWithoutMovieInputObjectSchema } from './MovieCastCreateWithoutMovieInput.schema';
import { MovieCastUncheckedCreateWithoutMovieInputObjectSchema } from './MovieCastUncheckedCreateWithoutMovieInput.schema';
import { MovieCastCreateOrConnectWithoutMovieInputObjectSchema } from './MovieCastCreateOrConnectWithoutMovieInput.schema';
import { MovieCastCreateManyMovieInputEnvelopeObjectSchema } from './MovieCastCreateManyMovieInputEnvelope.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastUncheckedCreateNestedManyWithoutMovieInput> =
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
      createMany: z
        .lazy(() => MovieCastCreateManyMovieInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
          z.lazy(() => MovieCastWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict();

export const MovieCastUncheckedCreateNestedManyWithoutMovieInputObjectSchema =
  Schema;
