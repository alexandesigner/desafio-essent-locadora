import { z } from 'zod';

export const MovieStockScalarFieldEnumSchema = z.enum([
  'id',
  'movie_id',
  'created_at',
  'updated_at'
]);
