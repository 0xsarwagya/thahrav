import type { z } from 'zod';
import type { inputSchema } from './schema';

export type Input = z.infer<typeof inputSchema>;

interface OutputBaseSchema<T extends boolean> {
    success: T;
}

/**
 * Represents a successful output result.
 *
 * This interface extends the base output schema (with a success indicator set to true)
 * and includes a message providing additional details about the success.
 */
interface OutputSuccessSchema extends OutputBaseSchema<true> {
    message: string;
}

interface OutputErrorSchema extends OutputBaseSchema<false> {
    error: string;
}

export type Output = OutputSuccessSchema | OutputErrorSchema;