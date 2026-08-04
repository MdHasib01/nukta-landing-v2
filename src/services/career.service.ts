import { ApiResponse } from '@/types';

export interface CareerApplicationPayload {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl?: string; // Or File object if using FormData
  coverLetter?: string;
}

export const careerService = {
  async submitApplication(payload: CareerApplicationPayload): Promise<ApiResponse<void>> {
    // TODO: Implement actual career application API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 800);
    });
  }
};
