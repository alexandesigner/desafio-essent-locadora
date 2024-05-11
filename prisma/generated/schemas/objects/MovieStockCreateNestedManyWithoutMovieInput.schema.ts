import { z } from 'zod';
import { MovieStockCreateWithoutMovieInputObjectSchema } from './MovieStockCreateWithoutMovieInput.schema';
import { MovieStockUncheckedCreateWithoutMovieInputObjectSchema } from './MovieStockUncheckedCreateWithoutMovieInput.schema';
import { MovieStockCreateOrConnectWithoutMovieInputObjectSchema } from './MovieStockCreateOrConnectWithoutMovieInput.schema';
import { MovieStockCreateManyMovieInputEnvelopeObjectSchema } from './MovieStockCreateManyMovieInputEnvelope.schema';
import { MovieStockWhereUniqueInputObjectSchema } from './MovieStockWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateNestedManyWithoutMovieInput> = z
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
    createMany: z
      .lazy(() => MovieStockCreateManyMovieInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MovieStockWhereUniqueInputObjectSchema),
        z.lazy(() => MovieStockWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const MovieStockCreateNestedManyWithoutMovieInputObjectSchema = Schema;
