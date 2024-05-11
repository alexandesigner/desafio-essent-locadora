import {
  LoginInputRequest,
  PersonResponseData,
  RegisterInputRequest,
  Response
} from '@/types';
import ApiService from '../api.service';

export const login = async (request: LoginInputRequest) =>
  await ApiService<Response<PersonResponseData>>('/api/v1/auth/login', {
    method: 'POST',
    body: request
  });

export const register = async (request: RegisterInputRequest) =>
  await ApiService<Response<PersonResponseData>>('/api/v1/auth/register', {
    method: 'POST',
    body: request
  });

export const getLoggedPerson = async () =>
  await ApiService<Response<PersonResponseData>>('/api/v1/auth/logged');
