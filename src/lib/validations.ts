import { PersonType, RentalStatus } from '@prisma/client';
import * as z from 'zod';

export const messages = {
  required: 'Campo obrigatório.',
  email: 'Insira um e-mail válido.',
  min: 'O campo deve ter pelo menos {min} caracteres.',
  max: 'O campo deve ter no máximo {max} caracteres.'
};

export const paginationSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total_pages: z.number(),
  has_next_page: z.boolean(),
  has_prev_page: z.boolean(),
  next_page: z.number(),
  prev_page: z.number()
});

export const metaSchema = z.object({
  ok: z.boolean(),
  message: z.string(),
  pagination: paginationSchema.optional()
});

export const CreatePersonInputValidation = z.object({
  full_name: z
    .string()
    .min(3, {
      message: messages.min?.replace('{min}', '3')
    })
    .max(50, {
      message: messages.min?.replace('{max}', '50')
    }),
  email: z
    .string()
    .email({
      message: messages.email
    })
    .min(2, {
      message: messages.min?.replace('{min}', '3')
    }),
  password: z
    .string()
    .min(8, {
      message: messages.min?.replace('{min}', '8')
    })
    .max(25, {
      message: messages.min?.replace('{max}', '25')
    }),
  type: z.enum(['USER', 'CLIENT']).optional(),
  is_verified: z.boolean().optional()
});

export const LoginPersonInputValidation = z.object({
  email: z
    .string()
    .email({
      message: messages.email
    })
    .min(2, {
      message: messages.min?.replace('{min}', '3')
    }),
  password: z
    .string()
    .min(8, {
      message: messages.min?.replace('{min}', '8')
    })
    .max(25, {
      message: messages.min?.replace('{max}', '25')
    })
});

export const CategoryInputValidation = z.object({
  name: z.string().min(2, {
    message: messages.min?.replace('{min}', '3')
  })
});

export const MovieInputValidateSchema = z.object({
  title: z.string(),
  release_year: z.number(),
  image: z.string(),
  synopsis: z.string(),
  cast: z.array(z.string()),
  rental_value: z.number(),
  category: z.string()
});

export const RentalInputValidation = z.object({
  status: z.enum(['DELAYED', 'REGULAR', 'DELIVERED']).optional()
});

export const PersonInputValidation = z.object({
  full_name: z
    .string()
    .min(3, {
      message: messages.min?.replace('{min}', '3')
    })
    .max(50, {
      message: messages.min?.replace('{max}', '50')
    }),
  email: z
    .string()
    .email({
      message: messages.email
    })
    .min(2, {
      message: messages.min?.replace('{min}', '3')
    }),
  password: z
    .string()
    .min(8, {
      message: messages.min?.replace('{min}', '8')
    })
    .max(25, {
      message: messages.min?.replace('{max}', '25')
    }),
  type: z.enum(['USER', 'CLIENT']).optional(),
  is_verified: z.boolean().optional()
});

export const personTypeEnum = z.nativeEnum(PersonType);
export const rentalStatusEnum = z.nativeEnum(RentalStatus);
