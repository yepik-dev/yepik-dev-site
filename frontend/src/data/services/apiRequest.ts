'use server';
import { getBackendUrl } from "./getBackendUrl";

interface ApiRequest {
    path: string;
    method: "GET" | "POST";
    body?: object;
    revalidate?: number;
    cache?: "no-store" | "force-cache";
}

export const publicApiRequest = async ({
    path,
    method,
    body,
    revalidate,
    cache = "force-cache", }: ApiRequest) => {

    const backendUrl = getBackendUrl();

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    };

    const options: RequestInit = {
        method: method,
        headers: headers,
    };

    if (method !== "GET" && body) {
        options.body = JSON.stringify(body);
    }

    if (cache) {
        options.cache = cache;
    }

    if (revalidate !== undefined) options.next = { revalidate };

    try {
        const response = await fetch(
            `${backendUrl}/api/${path}`,
            options
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Response error: ${data.error.status} - ${data.error.message}`);
        }

        return data;
    }
    catch (error) {
        throw error;
    }
};