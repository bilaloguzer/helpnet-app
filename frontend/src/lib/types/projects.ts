// types.ts

export interface Project {
	id: string;
	organizationId: string;
	title: string;
	description: string;
	longDescription: string;
	category: ProjectCategory;
	target: number;
	raised: number;
	currency: string;
	startDate: Date;
	endDate: Date;
	status: ProjectStatus;
    mainImage: string;
	images: string[];
	updates: ProjectUpdate[];
	supporters: Supporter[];
	createdAt: Date;
}

export type ProjectCategory = 'education' | 'health' | 'environment' | 'social' | 'emergency' | 'other';

export type ProjectStatus = 'draft' | 'pending' | 'active' | 'completed' | 'cancelled';

export interface ProjectUpdate {
	id: string;
	content: string;
	images?: string[];
	createdAt: Date;
}

export interface Supporter {
	id: string;
	amount: number;
	message?: string;
	anonymous: boolean;
	createdAt: Date;
}
