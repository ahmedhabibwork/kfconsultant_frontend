// About Us API Response Types
export interface AboutUsApiResponse {
    status: string;
    text: string;
    msg_data: AboutUsData;
}

export interface AboutUsData {
    about_us: AboutUs;
    team: TeamMember[];
}

export interface AboutUs {
    id: number;
    title: string;
    short_description: string;
    description: string | null;
    phone: string | null;
    experience_years: number;
    image: string | null;
    created_at: string;
}

export interface TeamMember {
    id: number;
    name: string;
    job_title: string;
    image: string;
    created_at: string;
}
