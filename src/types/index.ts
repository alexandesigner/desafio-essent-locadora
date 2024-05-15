import { MovieCast, MovieStock, Prisma } from '@prisma/client';

export interface EnumType<T extends string> {
  [key: string]: T;
}

export interface Meta {
  ok: boolean;
  message: string;
  pagination?: Pagination;
}

export interface ParamsWithPagination {
  page: number;
  limit: number;
  [key: string]: any;
}

export interface Pagination {
  page: number;
  limit: number;
  total_pages: number;
  total_elements: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page?: number;
  prev_page?: number;
}

export interface Response<T> {
  meta: Meta;
  data: T;
}

export interface ListResponse<T> {
  meta: Meta;
  data: T[];
}

export interface PersonType extends EnumType<string> {
  USER: 'USER';
  CLIENT: 'CLIENT';
}

export interface MoviePersonType extends EnumType<string> {
  DIRECTOR: 'DIRECTOR';
  ACTOR: 'ACTOR';
}

export interface RentalStatus extends EnumType<string> {
  REGULAR: 'REGULAR';
  DELAYED: 'DELAYED';
  DELIVERED: 'DELIVERED';
}

export interface PersonResponseData {
  id: number;
  email: string;
  avatar?: string;
  type: 'USER' | 'CLIENT' | undefined;
  full_name: string;
  is_verified: boolean;
  created_at?: Date;
  updated_at?: Date;
  rentals?: RentalResponseData[];
  token?: string;
}

export interface MoviePersonResponseData {
  id: number;
  type: 'DIRECTOR' | 'ACTOR' | undefined;
  full_name: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface LoginPersonResponseData {
  person: PersonResponseData;
  token: string;
}

export interface LoginInputRequest {
  email: string;
  password: string;
}

export interface RegisterInputRequest extends CreatePersonResponseData {}

export interface CreatePersonResponseData {
  id?: number;
  email: string;
  full_name: string;
  is_verified: boolean;
  password: string;
}

export interface CategoryResponseData {
  id?: number;
  name: string;
  movies: MovieResponseData[];
}

export interface MovieResponseData {
  id?: number;
  title: string;
  release_year: number;
  featured_image?: string;
  thumb_image?: string;
  synopsis: string;
  cast: MovieCast[];
  stock: MovieStock[];
  rental_value: number;
  created_at?: Date;
  updated_at?: Date;
  category: CategoryResponseData;
  rentals?: RentalResponseData[];
}

export interface RentalResponseData {
  id?: number;
  withdrawal_at: Date;
  delivery_at?: Date | null;
  due_at: Date;
  late_fee: number;
  total_amount: number;
  status: keyof RentalStatus;
  created_at?: Date;
  updated_at?: Date;
  renter_id: number;
  renter: PersonResponseData;
  movie_id: number;
  movie: MovieResponseData;
}

export interface List {
  id: number;
  [key: string]: any;
}

export interface GroupedCategory {
  id: number;
  title: string;
  slugPath?: string;
  data: List[];
}
