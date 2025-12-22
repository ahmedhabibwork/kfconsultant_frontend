'use server';

import { HomePageBlogResponse } from '@/types/blogTypes';
import { apiFetch } from '@/lib/apiFetch';

export async function getBlogs(): Promise<HomePageBlogResponse> {
    const result = await apiFetch<HomePageBlogResponse>('/blogs', {
        method: 'GET',
        cache: 'no-store',
    });

    if (result.isErr()) {
        console.error('Error fetching blogs:', result.error);
        throw new Error(result.error.message);
    }

    return result.value;
}
