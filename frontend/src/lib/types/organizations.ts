export interface Organization {
    id: string;
    name: string;
    description: string;
    logo: string;
    email: string;
    phone: string;
    address: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
    verified: boolean;
    createdAt: Date;
    projects: string[]; // Project IDs
   }