'use server';

import { apiFetch } from '@/lib/apiFetch';
import { BlogDetailsResponse } from '@/types/blogDetailesType';

export async function getBlogDetails(slug: string): Promise<BlogDetailsResponse> {
    const result = await apiFetch<BlogDetailsResponse>(`/blogs/${slug}`, {
        method: 'GET',
        cache: 'no-store',
    });

    if (result.isOk()) {
        return result.value;
    } else {
        console.error('Error fetching blog details:', result.error);
        throw new Error(result.error.message || `Failed to fetch blog details`);
    }
}
