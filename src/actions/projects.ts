'use server';

import { apiFetch } from '@/lib/apiFetch';
import { ApiResponse, ProjectFilters } from '@/types/projectsTypes';

export async function getProjects(filters?: ProjectFilters) {
    const params = new URLSearchParams();

    if (filters?.category) params.append('category', filters.category);
    if (filters?.scale) params.append('scale', filters.scale);
    if (filters?.scope) params.append('scope', filters.scope);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.year) params.append('year', filters.year);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.per_page) params.append('per_page', String(filters.per_page));

    const queryString = params.toString();
    const endpoint = queryString ? `/projects?${queryString}` : '/projects';

    const result = await apiFetch<ApiResponse>(endpoint);

    if (result.isErr()) {
        throw new Error(result.error.message);
    }

    return result.value;
}
