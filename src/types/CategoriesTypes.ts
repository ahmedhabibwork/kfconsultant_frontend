export interface Category {
    id: number;
    slug: string;
    title: string;
    created_at: string; // ISO 8601 date string
}

export interface CategoriesResponse {
    status: string;
    text: string;
    msg_data: Category[];
}

export type Status = "success" | "error" | "loading"; // Common status values
export type CategorySlug =
    | "Religious"
    | "Recreational"
    | "Governmental"
    | "Educational"
    | "Bridges-and-Tunnels"
    | "Healthcare"
    | "Industrial"
    | "Commercial"
    | "Residential"
    | "Mixed-Use"
    | "High-Rise"
    | "Landmark";

// You could also create more specific types if needed
export interface CategoryCreatePayload {
    slug: string;
    title: string;
}

export interface CategoryUpdatePayload {
    slug?: string;
    title?: string;
}

// Example usage types
export interface PaginatedCategoriesResponse extends CategoriesResponse {
    current_page: number;
    total_pages: number;
    total_items: number;
    per_page: number;
}