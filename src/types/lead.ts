export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  businessName?: string;
  websiteUrl?: string;
  facebookUrl?: string;
  stage: string;
  supportType: string;
  engagementModel: string;
  problem: string;
  message?: string;
  createdAt: string;
}

export interface EmailPayload extends LeadPayload {
  source: string;
}

export interface CrmPayload {
  leadId: string;
  businessName: string;
  phone: string;
  email: string;
  status: string;
  source: string;
  createdTime: string;
  preferredContact: string;
}
