// Base types
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

export interface Status {
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
    status: Status;
    year: Year;
    owner: string;
    location: string;
    map_link: string | null;
    cover_image: string;
    images: string[];
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
}

export interface SimilarProject {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    description: string;
    category: Category;
    scope: Scope;
    status: Status;
    year: Year;
    owner: string;
    location: string;
    map_link: string | null;
    cover_image: string;
    images: string[];
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
}

export interface MsgData {
    project: Project;
    similar_projects: SimilarProject[];
}

export interface ProjectDetailsResponse {
    status: string;
    text: string;
    msg_data: MsgData;
}