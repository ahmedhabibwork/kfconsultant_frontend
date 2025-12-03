// Contact Info API Response Types
export interface ContactInfoApiResponse {
    status: string;
    text: string;
    msg_data: ContactInfo;
}

export interface ContactInfo {
    id: number;
    title: string;
    description: string | null;
    address: string;
    phone1: string;
    phone2: string;
    email: string;
    facebook_link: string | null;
    instagram_link: string | null;
    whatsapp_number: string;
    map_link: string;
    map_image: string | null;
    linkedin_link: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
