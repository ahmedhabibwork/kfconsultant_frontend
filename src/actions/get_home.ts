'use server';

import { apiFetch } from '@/lib/apiFetch';
import { HomePageResponse } from '@/types/homeTypes';

export async function getHome() {
    const result = await apiFetch<HomePageResponse>('/home');

    if (result.isErr()) {
        throw new Error(result.error.message);
    }

    return result.value;
}