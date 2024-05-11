import { z } from 'zod';

export const MovieCastScalarFieldEnumSchema = z.enum([
  'id',
  'movie_id',
  'person_id',
  'created_at',
  'updated_at'
]);
