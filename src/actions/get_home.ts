'use server';

import { apiFetch } from '@/lib/apiFetch';
import { ApiResponse } from '@/types/homeTypes';

export async function getHome() {
    const result = await apiFetch<ApiResponse>('/home');

    if (result.isErr()) {
        throw new Error(result.error.message);
    }

    return result.value;
}