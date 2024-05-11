import { z } from 'zod';

export const PersonScalarFieldEnumSchema = z.enum([
  'id',
  'avatar',
  'email',
  'type',
  'full_name',
  'is_verified',
  'password',
  'created_at',
  'updated_at'
]);
