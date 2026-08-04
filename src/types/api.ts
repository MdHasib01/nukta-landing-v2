export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
}

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
