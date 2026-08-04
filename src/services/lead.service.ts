import { LeadPayload, ApiResponse } from '@/types';
import { env } from '@/config/environment';

export const leadService = {
  /**
   * Submit a new lead.
   * Supports local storage (default) or safe remote backend API delivery.
   */
  async submitLead(payload: LeadPayload): Promise<ApiResponse<void>> {
    if (env.enableRemoteLeadSubmission) {
      if (!env.apiUrl && !env.leadWebhookUrl) {
        // Fail safely if remote is enabled but no endpoints are configured
        return { success: false, error: 'Remote submission is enabled but no endpoints are configured.' };
      }

      try {
        // Prepare safe payload for backend processing
        const safePayload = {
          ...payload,
          source: 'nukta_corporate_website',
          submittedAt: new Date().toISOString()
        };

        // Example: Primary backend integration
        if (env.apiUrl) {
          const response = await fetch(`${env.apiUrl}/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(safePayload),
          });
          if (!response.ok) throw new Error('Backend submission failed');
          return { success: true };
        }

        // Example: Fallback/Alternative webhook integration
        if (env.leadWebhookUrl) {
          const response = await fetch(env.leadWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(safePayload),
          });
          if (!response.ok) throw new Error('Webhook submission failed');
          return { success: true };
        }
      } catch (error) {
        console.error('Remote submission error:', error);
        return { success: false, error: 'Failed to process lead remotely. Please try again.' };
      }
    }

    // Default: Local Storage Mock
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const existingLeads = JSON.parse(localStorage.getItem('nukta_leads') || '[]');
          localStorage.setItem('nukta_leads', JSON.stringify([...existingLeads, payload]));
          resolve({ success: true });
        } catch (error) {
          resolve({ success: false, error: 'Failed to save lead locally' });
        }
      }, 800); // Simulate network delay
    });
  }
};
