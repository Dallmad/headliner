import { Loader } from '@/components/Loader';
import { Notification } from '@/components/Notification';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Suspense } from 'react';

import { Router } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60 sec
    },
  },
});

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <Loader />
        <Notification />
        <Router />
      </QueryClientProvider>
    </Suspense>
  );
};
