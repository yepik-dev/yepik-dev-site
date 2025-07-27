import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { strapi } from "@strapi/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const client = strapi({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337/api',
  auth: process.env.NEXT_PUBLIC_STRAPI_TOKEN,

});
