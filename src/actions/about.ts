"use server";
import { apiFetch } from "@/lib/apiFetch";
import { ApiResponse } from "@/types/aboutTypes";

export async function getAboutUs() {
    const result = await apiFetch<ApiResponse>("/about-us", {
        method: "GET",
        cache: "no-store",
    });

    if (result.isOk()) {
        return result.value;
    } else {
        console.error("Failed to fetch about us data:", result.error);
        throw new Error(result.error.message || "Failed to fetch about us data");
    }
}
