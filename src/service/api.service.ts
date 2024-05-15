import { toast } from '@/components/ui/use-toast';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
  method?: RequestMethod;
  body?: any;
}

async function ApiService<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T | void> {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json'
    };

    const localStorageToken = localStorage.getItem('USER_TOKEN');

    if (localStorageToken) {
      headers['Authorization'] = `Bearer ${localStorageToken}`;
    }

    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: JSON.stringify(options.body)
    });

    if (!response.ok) {
      const res = await response.json();
      const sessionError =
        res?.meta?.message === 'Session expired!' ||
        res?.meta?.message === 'Invalid Credentials' ||
        res?.meta?.message === 'Token is required' ||
        res?.meta?.message === 'jwt expired' ||
        res?.meta?.message === 'Cannot convert undefined or null to object';

      if (sessionError) {
        window.location.replace('/login');
      }

      toast({
        variant: 'destructive',
        title: 'API HTTP error',
        description: !!sessionError ? 'Session expired!' : res?.meta?.message
      });

      return;
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    toast({
      title: 'API Service error',
      description: `An error occurred while making the API call: ${
        (error as unknown as any)?.message
      }`
    });

    return;
  }
}

export default ApiService;
