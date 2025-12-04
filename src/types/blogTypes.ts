// Core types for the provided JSON
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    description: string;
    meta_title: string | null;
    meta_description: string | null;
    images: string[];
    created_at: string;
}

export interface HomePageBlogResponse {
    status: string;
    text: string;
    msg_data: BlogPost[][];
}