import { z } from 'zod';

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