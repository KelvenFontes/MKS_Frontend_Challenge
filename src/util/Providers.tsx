'use client'

import { ReactNode } from "react"
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from "react";
import { GlobalStyles } from "@/app/GlobalStyles";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      {children}
    </QueryClientProvider>
  );
}
