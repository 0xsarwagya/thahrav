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

export interface WebhookData {
    data: {
        order: {
            order_id: string
            order_amount: number
            order_currency: string
        }
        payment: {
            cf_payment_id: string
            payment_status: string
            payment_amount: number
            payment_currency: string
            payment_message: string
            payment_time: string
        }
        customer_details: {
            customer_id: string
            customer_name: string
            customer_email: string
            customer_phone: string
        }
    }
    event_time: string
    type: string
}