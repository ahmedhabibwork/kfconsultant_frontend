'use server';

import { HomePageBlogResponse } from '@/types/blogTypes';

export async function getBlogs(): Promise<HomePageBlogResponse> {
    try {
        const response = await fetch('http://72.62.16.29/api/v1/blogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }

        const data: HomePageBlogResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}
