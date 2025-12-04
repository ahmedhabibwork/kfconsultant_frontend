export type Category = {
    id: number;
    slug: string;
    title: string;
    created_at: string;
};

export type Project = {
    id: number;
    title: string;
    slug: string | null;
    short_description: string;
    location: string;
    category: Category;
    cover_image: string;
};

export type Banner = {
    id: number;
    title: string;
    image: string;
};

export type Client = {
    id: number;
    title: string;
    image: string;
    created_at: string;
};

export type WhyUs = {
    id: number;
    title: string;
    short_description: string;
    description: string | null;
    phone: string | null;
    experience_years: number;
    image: string | null;
    created_at: string;
};

export type Service = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    created_at: string;
};

export type MsgData = {
    banner: Banner[];
    project: Project[];
    clients: Client[];
    whyUs: WhyUs;
    services: Service[];
};

export type HomePageResponse = {
    status: string;
    text: string;
    msg_data: MsgData;
};