import { z } from 'zod';
import { RentalScalarWhereInputObjectSchema } from './RentalScalarWhereInput.schema';
import { RentalUpdateManyMutationInputObjectSchema } from './RentalUpdateManyMutationInput.schema';
import { RentalUncheckedUpdateManyWithoutRentalsInputObjectSchema } from './RentalUncheckedUpdateManyWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalUpdateManyWithWhereWithoutRenterInput> = z
  .object({
    where: z.lazy(() => RentalScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RentalUpdateManyMutationInputObjectSchema),
      z.lazy(() => RentalUncheckedUpdateManyWithoutRentalsInputObjectSchema)
    ])
  })
  .strict();

export const RentalUpdateManyWithWhereWithoutRenterInputObjectSchema = Schema;
