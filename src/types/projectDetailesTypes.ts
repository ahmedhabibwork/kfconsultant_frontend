// Core entity interfaces
export interface Category {
    id: number;
    slug: string;
    title: string;
    created_at: string | null;
}

export interface Scope {
    id: number;
    slug: string;
    title: string;
    created_at: string | null;
}

export interface Scale {
    id: number;
    slug: string;
    title: string;
    created_at: string | null;
}

export interface ProjectStatus {
    id: number;
    slug: string;
    title: string;
    created_at: string | null;
}

export interface Year {
    id: number;
    slug: string;
    title: string;
    created_at: string | null;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    description: string;
    category: Category;
    scope: Scope;
    scale: Scale;
    status: ProjectStatus;
    year: Year;
    owner: string;
    location: string;
    map_link: string;
    cover_image: string;
    images: string[];
    meta_title: string;
    meta_description: string;
    created_at: string;
}

export interface ProjectDetailsData {
    project: Project;
}

export interface ProjectDetailsResponse {
    status: string;
    text: string;
    msg_data: ProjectDetailsData;
}