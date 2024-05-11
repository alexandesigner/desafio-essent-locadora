import { z } from 'zod';

export const PersonTypeSchema = z.enum(['USER', 'CLIENT']);
