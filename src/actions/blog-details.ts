'use server';

import { BlogDetailsResponse } from '@/types/blogDetailesType';

export async function getBlogDetails(slug: string): Promise<BlogDetailsResponse> {
    try {
        const response = await fetch(`http://72.62.16.29/api/v1/blogs/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch blog details: ${response.statusText}`);
        }

        const data: BlogDetailsResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog details:', error);
        throw error;
    }
}
