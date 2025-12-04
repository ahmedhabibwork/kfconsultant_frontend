// Core BlogPost interface (can be shared across files)
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

export interface BlogDetailsData {
    latest_blogs: BlogPost[];
    blog: BlogPost;
}

export interface BlogDetailsResponse {
    status: string;
    text: string;
    msg_data: BlogDetailsData;
}