// Base response types
export interface ApiResponse {
    status: string;
    text: string;
    msg_data: MsgData;
    pagination: Pagination;
}

// Data container
export interface MsgData {
    data: Project[];
    filters: Filters;
}

// Pagination
export interface Pagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

// Project types
export interface Project {
    id: number;
    title: string;
    slug: string | null;
    short_description: string;
    description: string;
    category: Category;
    scope: Scope;
    scale: Scale;
    status: Status;
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

// Filter categories
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

// Filters
export interface Filters {
    category: Record<string, string>;
    scale: Record<string, string>;
    scope: Record<string, string>;
    year: Record<string, string>;
    status: Record<string, string>;
}

// Optional: Type for filter keys (if you need specific string literal types)
export type CategoryKey =
    | 'Landmark'
    | 'High-Rise'
    | 'Mixed-Use'
    | 'Residential'
    | 'Commercial'
    | 'Industrial'
    | 'Healthcare'
    | 'Bridges-and-Tunnels'
    | 'Educational'
    | 'Governmental'
    | 'Recreational'
    | 'Religious';

export type ScaleKey = '100000' | '200000' | '50000';

export type StatusKey = 'on-site' | 'completed' | 'under-construction';

// Example usage types
export interface ProjectFilters {
    category?: string;
    scale?: string;
    scope?: string;
    year?: string;
    status?: string;
    search?: string;
    page?: number;
    per_page?: number;
}

export interface ProjectListResponse {
    projects: Project[];
    filters: Filters;
    pagination: Pagination;
}