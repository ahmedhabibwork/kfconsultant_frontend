export interface ApiResponse {
    status: string;
    text: string;
    msg_data: HomeData;
}

export interface HomeData {
    banner: Banner[];
    project: Project[];
    clients: Client[];
    about_us: AboutUs;
    services: Service[];
}

export interface Banner {
    id: number;
    title: string;
    image: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    location: string;
    category: Category;
    cover_image: string;
}

export interface Category {
    id: number;
    slug: string;
    title: string;
    created_at: string; // ISO 8601 date string
}

export interface Client {
    id: number;
    title: string;
    image: string;
    created_at: string; // ISO 8601 date string
}

export interface AboutUs {
    id: number;
    title: string;
    short_description: string;
    experience_years: number;
}

export interface Service {
    id: number;
    slug: string;
    title: string;
    description: string; // HTML string
    image: string;
    created_at: string; // ISO 8601 date string
}