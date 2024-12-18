import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { makeServer } from "./mirage/server";
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './layout/index.tsx';

makeServer();
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>,
)
