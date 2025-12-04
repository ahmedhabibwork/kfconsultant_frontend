import { CategoriesResponse } from "@/types/CategoriesTypes";

export async function getCategories(): Promise<CategoriesResponse> {
    try {
        const response = await fetch("http://72.62.16.29/api/v1/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch categories: ${response.statusText}`);
        }

        const data: CategoriesResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
