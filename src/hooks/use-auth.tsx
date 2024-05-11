import { useMutation, useQuery } from '@tanstack/react-query';
import { getLoggedPerson, login, register } from '@/service/auth/http';
import { LoginInputRequest, RegisterInputRequest } from '@/types';

export const useLogin = () => {
  return useMutation({
    mutationFn: (request: LoginInputRequest) => login(request)
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (request: RegisterInputRequest) => register(request)
  });
};

export const useLoggedPerson = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => getLoggedPerson(),
    ...config
  });
};

export const useCurrentPerson = () => {
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('USER_TOKEN') || '';
  }
  const logged = useLoggedPerson({ enabled: !!token });
  return logged?.data?.data;
};
