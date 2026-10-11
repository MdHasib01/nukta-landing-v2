export const business = {
  businessName: "Nukta",
  legalName: "Nukta Technologies",
  tagline: "One Stop Premium Business Service",
  siteUrl: "https://nuktatechnologies.com",
  email: "contacts@nuktatechnologies.com",
  phone: null,
  officeAddress: "Palbari, Jashore Sadar, Jashore",
  fullAddress: "Palbari, Jashore Sadar, Jashore, Bangladesh",
  // YYYY-MM — drives About section, footer copyright and JSON-LD foundingDate
  foundingDate: "2023-03",
  // Set to the trade license number to show it in the About facts strip
  tradeLicenseNo: null as string | null,
  // Optional — set to show "Founder" in the About facts strip
  founderName: null as string | null,
  facebookUrl: null as string | null,
  linkedinUrl: null as string | null,
  messengerUrl: null as string | null,
  whatsappUrl: null,
  googleMapsUrl: null
};

export const foundingYear = business.foundingDate.slice(0, 4);

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const foundingMonthYear = `${monthNames[Number(business.foundingDate.slice(5, 7)) - 1]} ${foundingYear}`;
