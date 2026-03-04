import { useAppStore } from '@/store/hooks/useAppStore';
import type { AxiosError } from 'axios';
import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://dummyjson.com',
});

let activeRequests = 0;

const updateLoader = (state: boolean) => {
  const { setLoading } = useAppStore.getState();

  if (state) {
    activeRequests++;
    setLoading(true);
  } else {
    activeRequests--;

    if (activeRequests <= 0) {
      activeRequests = 0;
      setLoading(false);
    }
  }
};

client.interceptors.request.use((config) => {
  updateLoader(true);

  return config;
});

client.interceptors.response.use(
  (response) => {
    updateLoader(false);

    return response.data;
  },
  (error: AxiosError<{ message?: string }>) => {
    const message = error?.response?.data?.message || 'Something went wrong';

    const { setNotification } = useAppStore.getState();

    setNotification({
      message,
      type: 'error',
    });

    return Promise.reject(error);
  },
);
