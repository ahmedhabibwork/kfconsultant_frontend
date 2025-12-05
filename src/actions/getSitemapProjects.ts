'use server';

import { apiFetch } from '@/lib/apiFetch';
import { ApiResponse } from '@/types/projectsTypes';

export async function getSitemapProjects() {
    const result = await apiFetch<ApiResponse>('/projects', {
        cache: 'force-cache',
        next: { revalidate: 86400 } // 24 hours
    });

    if (result.isErr()) {
        throw new Error(result.error.message);
    }

    return result.value;
}
