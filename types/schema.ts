import { z } from 'zod';
import type { Product } from '@/prisma';
import { zodToJsonSchema } from "zod-to-json-schema";

/**
 * Schema for validating input data.
 *
 * This schema validates an object containing:
 * - name: A required string.
 * - email: A required string that must be a valid email address.
 *
 * @remarks
 * Uses zod for runtime validation.
 */
export const inputSchema = z.object({
    email: z.string().email(),
});

const SIZE = z.enum(["XS", "S", "M", "L", "XL", "XXL"]);
const CATEGORY = z.enum([
    "MENS_CREW",
    "MENS_OVERSIZED",
    "UNISEX_CREW",
    "UNISEX_OVERSIZED",
    "WOMENS_REGULAR",
    "WOMENS_CROPPED_HOODIE",
    "MENS_HOODIE",
    "UNISEX_HOODIE"
]);

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number().int(),
    originalPrice: z.number().int(),
    limit: z.number().int(),
    images: z.array(z.string().url()), // or z.string() if not URLs
    sizes: z.array(SIZE),
    categories: CATEGORY,
    metadata: z.any(), // Or define a more specific shape if known
    createdAt: z.date(),
    updatedAt: z.date()
});

export const productJSONSchema = zodToJsonSchema(productSchema);