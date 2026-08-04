import { env } from './environment';

export const apiConfig = {
  baseUrl: env.apiUrl || '/api',
  timeout: 10000,
  endpoints: {
    leads: '/leads',
    contact: '/contact',
    careers: '/careers',
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};
