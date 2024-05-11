import { z } from 'zod';

export const MovieScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'release_year',
  'featured_image',
  'thumb_image',
  'synopsis',
  'rental_value',
  'created_at',
  'updated_at',
  'category_id'
]);
