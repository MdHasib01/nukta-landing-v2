import { ApiResponse } from '@/types';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const contactService = {
  async submitContact(payload: ContactPayload): Promise<ApiResponse<void>> {
    // TODO: Implement actual contact API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 800);
    });
  }
};
