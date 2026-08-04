export class AppError extends Error {
  public status: number;
  public code?: string;

  constructor(message: string, status = 500, code?: string) {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.code = code;
  }
}

export const ErrorHandler = {
  handle(error: unknown): string {
    if (error instanceof AppError) {
      return error.message;
    }
    
    if (error instanceof Error) {
      // Handle network errors
      if (error.message.includes('Network Error') || error.message.includes('fetch')) {
        return 'Network error occurred. Please check your connection and try again.';
      }
      return error.message;
    }

    return 'An unexpected error occurred. Please try again later.';
  },

  log(error: unknown, context?: string) {
    // TODO: Send to error tracking service (e.g., Sentry, LogRocket)
    console.error(`[Error${context ? ` - ${context}` : ''}]`, error);
  }
};
