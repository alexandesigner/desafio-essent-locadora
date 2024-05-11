import { z } from 'zod';

export const RentalStatusSchema = z.enum(['REGULAR', 'DELAYED', 'DELIVERED']);
