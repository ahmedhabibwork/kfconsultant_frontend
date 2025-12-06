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

export async function getJobTitles() {
    try {
        const result = await apiFetch<any>("/form/job-application", {
            method: "GET",
            cache: "no-store"
        });

        if (result.isOk()) {
            console.log(result.value.msg_data);
            return result.value.msg_data;
        } else {
            console.error("Failed to fetch job titles:", result.error);
            return {};
        }
    } catch (error) {
        console.error("Error fetching job titles:", error);
        return {};
    }
}
