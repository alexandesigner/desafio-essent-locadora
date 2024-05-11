import { z } from 'zod';
import { MovieCastWhereUniqueInputObjectSchema } from './MovieCastWhereUniqueInput.schema';
import { MovieCastCreateWithoutPersonInputObjectSchema } from './MovieCastCreateWithoutPersonInput.schema';
import { MovieCastUncheckedCreateWithoutPersonInputObjectSchema } from './MovieCastUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateOrConnectWithoutPersonInput> = z
  .object({
    where: z.lazy(() => MovieCastWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MovieCastCreateWithoutPersonInputObjectSchema),
      z.lazy(() => MovieCastUncheckedCreateWithoutPersonInputObjectSchema)
    ])
  })
  .strict();

export const MovieCastCreateOrConnectWithoutPersonInputObjectSchema = Schema;
