import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'created_at',
  'updated_at'
]);
