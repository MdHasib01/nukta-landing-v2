export interface Project {
  id: string;
  brandName: string;
  category: string;
  coverImage: string | null;
  projectSummary: string;
  challenge: string;
  approach: string;
  services: string[];
  implementation: string;
  verifiedResults: string;
  status: 'completed' | 'ongoing';
  isPublished: boolean;
}

export interface Brand {
  name: string;
  desc: string;
  logo: string | null;
  facebookUrl: string;
}

// Nukta's own brands — shown until verified case studies are published. Example entry:
// { name: "Brand Name", desc: "One-line description", logo: null, facebookUrl: "https://www.facebook.com/brandpage" },
export const brands: Brand[] = [];

// Case studies — set isPublished: true once results are verified.
export const projects: Project[] = [
  {
    id: "1",
    brandName: "Brand A",
    category: "Brand identity",
    coverImage: null,
    projectSummary: "Rebranded for premium positioning.",
    challenge: "Brief challenge description",
    approach: "Nukta's approach",
    services: ["Branding", "Design"],
    implementation: "Implementation details",
    verifiedResults: "Result details",
    status: "completed",
    isPublished: false,
  },
];

export const publishedProjects = projects.filter((p) => p.isPublished);

// The Portfolio section and its nav links are hidden until there is something to show.
export const hasPortfolioContent = publishedProjects.length > 0 || brands.length > 0;
