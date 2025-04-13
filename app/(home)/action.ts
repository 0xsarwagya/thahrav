'use server';

import { handleErrors } from '@/lib/errors';
import { prisma } from '@/lib/prisma';
import type { Output } from '@/types';
import { inputSchema } from '@/types/schema';
import { isFakeEmailOnline } from 'fakefilter';

/**
 * Adds a user to the waitlist.
 *
 * This function receives form data, validates that both the name and email fields are present,
 * and sanitizes the input by converting FormData to JSON and parsing it with the input schema.
 * It then verifies the authenticity of the email using an online check for fake domains.
 *
 * If the email is determined to be from a fake domain or if validation fails, it throws an error.
 * Otherwise, it creates a new waitlist entry in the database.
 *
 * @param _ - An unused parameter.
 * @param data - A FormData object containing the user's input, including name and email.
 * @returns A Promise resolving to an Output object indicating the success or failure of the operation,
 *          along with either a success message or an error message.
 *
 * @throws {Error} When the name or email is missing or invalid, or if the email is detected as fake.
 */
export const addToWaitlist = async (
    _: unknown,
    data: FormData
): Promise<Output> => {
    try {
        // Convert FormData to JSON
        const jsonForm = JSON.parse(
            JSON.stringify(Object.fromEntries(data.entries()))
        );

        // Parse the input
        const { email } = inputSchema.parse(jsonForm);

        // Check if the email is fake
        const isFake = await isFakeEmailOnline(email);

        // Throw an error if the email is fake
        if (isFake.isFakeDomain) {
            throw new Error('Please provide a valid email address');
        }

        // Create a new waitlist entry
        await prisma.waitlist.create({
            data: {
                email,
            },
        });

        // Return a success message
        return {
            success: true,
            message: 'You have been added to the waitlist',
        };
    } catch (error) {
        // Handle errors
        const message = handleErrors(error);

        // Return an error message
        return {
            success: false,
            error: message,
        };
    }
};