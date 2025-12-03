"use server";
import { apiFetch } from "@/lib/apiFetch";
import { ServicesApiResponse } from "@/types/servicesTypes";

export async function getServices() {
    const result = await apiFetch<ServicesApiResponse>("/services", {
        method: "GET",
        cache: "no-store",
    });

    if (result.isOk()) {
        return result.value;
    } else {
        console.error("Failed to fetch services:", result.error);
        throw new Error(result.error.message || "Failed to fetch services");
    }
}
