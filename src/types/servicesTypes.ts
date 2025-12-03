// Services API Response Types
export interface ServicesApiResponse {
    status: string;
    text: string;
    msg_data: Service[];
}

export interface Service {
    id: number;
    slug: string;
    title: string;
    description: string;
    meta_title: string | null;
    meta_description: string | null;
    icon: string | null;
    image: string;
    created_at: string;
}
