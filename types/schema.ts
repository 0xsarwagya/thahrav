import { z } from 'zod';
import type { Products } from '@/prisma';

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

export const productSchema = z.custom<Products>(val => {
    if (typeof val !== 'object' || val === null) {
        return false;
    }
    z.string().parse(val.id);
    z.string().parse(val.name);
    z.string().parse(val.description);
    z.number().int().parse(val.price);
    z.number().int().parse(val.originalPrice);
    z.number().int().parse(val.limit);
    z.array(z.string().url()).parse(val.images);
    z.array(SIZE).parse(val.sizes);
    CATEGORY.parse(val.categories);
    z.any().parse(val.metadata);
    z.date().parse(val.createdAt);
    z.date().parse(val.updatedAt);
    return true;
});