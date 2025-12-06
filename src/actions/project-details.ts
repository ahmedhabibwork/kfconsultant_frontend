'use server';

import { apiFetch } from '@/lib/apiFetch';
import { ProjectDetailsResponse } from '@/types/projectDetailesTypes';

export async function getProjectDetails(slug: string): Promise<ProjectDetailsResponse> {
    const result = await apiFetch<ProjectDetailsResponse>(`/projects/${slug}`, {
        method: 'GET',
        cache: 'no-store',
    });

    if (result.isOk()) {
        return result.value;
    } else {
        console.error('Error fetching project details:', result.error);
        throw new Error(result.error.message || `Failed to fetch project details`);
    }
}
