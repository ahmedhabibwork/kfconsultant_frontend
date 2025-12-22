import { CategoriesResponse } from "@/types/CategoriesTypes";
import { apiFetch } from "@/lib/apiFetch";

export async function getCategories(): Promise<CategoriesResponse> {
    const result = await apiFetch<CategoriesResponse>("/categories", {
        method: "GET",
        cache: "no-store",
    });

    if (result.isErr()) {
        console.error("Error fetching categories:", result.error);
        throw new Error(result.error.message);
    }

    return result.value;
}
