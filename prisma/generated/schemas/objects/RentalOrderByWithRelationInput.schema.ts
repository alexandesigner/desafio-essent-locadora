import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PersonOrderByWithRelationInputObjectSchema } from './PersonOrderByWithRelationInput.schema';
import { MovieStockOrderByWithRelationInputObjectSchema } from './MovieStockOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RentalOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    withdrawal_at: z.lazy(() => SortOrderSchema).optional(),
    delivery_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    due_at: z.lazy(() => SortOrderSchema).optional(),
    late_fee: z.lazy(() => SortOrderSchema).optional(),
    total_amount: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    renter_id: z.lazy(() => SortOrderSchema).optional(),
    movie_stock_id: z.lazy(() => SortOrderSchema).optional(),
    renter: z.lazy(() => PersonOrderByWithRelationInputObjectSchema).optional(),
    movie_stock: z
      .lazy(() => MovieStockOrderByWithRelationInputObjectSchema)
      .optional()
  })
  .strict();

export const RentalOrderByWithRelationInputObjectSchema = Schema;
