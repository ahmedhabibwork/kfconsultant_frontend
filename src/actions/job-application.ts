"use server";
import { apiFetch } from "@/lib/apiFetch";

interface JobApplicationResponse {
    success: boolean;
    message: string;
}

export async function submitJobApplication(formData: FormData) {
    try {
        const result = await apiFetch<JobApplicationResponse>("/submit/job-application", {
            method: "POST",
            body: formData,
        });

        if (result.isOk()) {
            return { success: true, message: "Application submitted successfully!" };
        } else {
            console.error("Job application submission error:", result.error);
            return {
                success: false,
                message: result.error.message || "Failed to submit application"
            };
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        return {
            success: false,
            message: "An unexpected error occurred. Please try again."
        };
    }
}
