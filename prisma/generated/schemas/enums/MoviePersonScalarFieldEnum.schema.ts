import { z } from 'zod';

export const MoviePersonScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'avatar',
  'full_name',
  'created_at',
  'updated_at'
]);
