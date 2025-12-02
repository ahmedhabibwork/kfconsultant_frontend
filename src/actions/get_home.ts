'use server';

import { apiFetch } from '@/lib/apiFetch';
import { homeApiResponse } from '@/types/homeTypes';

export async function getHome() {
    const result = await apiFetch<homeApiResponse>('/home');

    if (result.isErr()) {
        throw new Error(result.error.message);
    }

    return result.value;
}