import { z } from 'zod';
import { MovieCastCreateWithoutPersonInputObjectSchema } from './MovieCastCreateWithoutPersonInput.schema';
import { MovieCastUncheckedCreateWithoutPersonInputObjectSchema } from './MovieCastUncheckedCreateWithoutPersonInput.schema';
import { MovieCastCreateOrConnectWithoutPersonInputObjectSchema } from './MovieCastCreateOrConnectWithoutPersonInput.schema';
import { MovieCastCreateManyPersonInputEnvelopeObjectSchema } from './MovieCastCreateManyPersonInputEnvelope.schema';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateNestedManyWithoutPersonInput> = z
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
    createMany: z
      .lazy(() => MovieCastCreateManyPersonInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
        z.lazy(() => MovieCastWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const MovieCastCreateNestedManyWithoutPersonInputObjectSchema = Schema;
