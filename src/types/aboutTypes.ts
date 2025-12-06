// Main response type
export interface ApiResponse {
    status: string;
    text: string;
    msg_data: MsgData;
}

// Data container type
export interface MsgData {
    about_us: AboutUs;
    team: TeamMember[];
}

// About Us section type
export interface AboutUs {
    id: number;
    title: string;
    mission: string;
    vision: string;
    our_founder: string;
    mission_image: string;
    vision_image: string;
    our_founder_image: string;
    phone: string | null;
    experience_years: number;
    created_at: string; // ISO date string
}

// Team member type
export interface TeamMember {
    id: number;
    name: string;
    job_title: string;
    image: string;
    created_at: string; // ISO date string
}

// Optional: You can also create a more specific type for the status
type ApiStatus = "success" | "error" | "loading"; // Add other possible statuses

// Optional: Type-safe response parsing with validation
const isApiResponse = (data: any): data is ApiResponse => {
    return (
        typeof data === "object" &&
        data !== null &&
        typeof data.status === "string" &&
        typeof data.text === "string" &&
        typeof data.msg_data === "object" &&
        data.msg_data !== null
    );
};

// Example usage:
// const response: ApiResponse = await fetchData();
// const aboutUs: AboutUs = response.msg_data.about_us;
// const team: TeamMember[] = response.msg_data.team;