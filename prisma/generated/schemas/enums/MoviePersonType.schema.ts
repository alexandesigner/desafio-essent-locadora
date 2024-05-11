import { z } from 'zod';

export const MoviePersonTypeSchema = z.enum(['DIRECTOR', 'ACTOR']);
