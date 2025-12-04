'use server';

import { ProjectDetailsResponse } from '@/types/projectDetailesTypes';

export async function getProjectDetails(slug: string): Promise<ProjectDetailsResponse> {
    try {
        const response = await fetch(`http://72.62.16.29/api/v1/projects/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch project details: ${response.statusText}`);
        }

        const data: ProjectDetailsResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching project details:', error);
        throw error;
    }
}
