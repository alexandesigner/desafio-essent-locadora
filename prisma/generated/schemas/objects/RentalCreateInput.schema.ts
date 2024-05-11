import { z } from 'zod';
import { RentalStatusSchema } from '../enums/RentalStatus.schema';
import { PersonCreateNestedOneWithoutRentalsInputObjectSchema } from './PersonCreateNestedOneWithoutRentalsInput.schema';
import { MovieStockCreateNestedOneWithoutRentalsInputObjectSchema } from './MovieStockCreateNestedOneWithoutRentalsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalCreateInput> = z
  .object({
    withdrawal_at: z.coerce.date().optional(),
    delivery_at: z.coerce.date().optional().nullable(),
    due_at: z.coerce.date(),
    late_fee: z.number(),
    total_amount: z.number(),
    status: z.lazy(() => RentalStatusSchema),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    renter: z.lazy(() => PersonCreateNestedOneWithoutRentalsInputObjectSchema),
    movie_stock: z.lazy(
      () => MovieStockCreateNestedOneWithoutRentalsInputObjectSchema
    )
  })
  .strict();

export const RentalCreateInputObjectSchema = Schema;
