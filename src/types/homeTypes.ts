// Base response type
export interface homeApiResponse {
    status: string;
    text: string;
    msg_data: MsgData;
}

// Main data container
export interface MsgData {
    banner: Banner;
    project: Project[];
    clients: Client[];
    whyUs: WhyUs;
    services: Service[];
}

// Banner type
export interface Banner {
    id: number;
    title: string;
    image: string;
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

export interface Category {
    id: number;
    slug: string;
    title: string;
    created_at: string;
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

// Client type
export interface Client {
    id: number;
    title: string;
    image: string;
    created_at: string;
}

// WhyUs type
export interface WhyUs {
    id: number;
    title: string;
    short_description: string;
    description: string | null;
    phone: string | null;
    experience_years: number;
    image: string | null;
    created_at: string;
}

// Service type
export interface Service {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    created_at: string;
}