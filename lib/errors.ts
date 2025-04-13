import { Prisma } from '@prisma/clinet';
import { ZodError } from 'zod';

/**
 * Processes an unknown error and returns a human-readable error message.
 *
 * The function checks if the provided error is an instance of the built-in Error class
 * and further distinguishes specific error types:
 *
 * - For errors of type ZodError, it aggregates and returns the validation error messages
 *   as a comma-separated string.
 *
 * - For errors of type Prisma.PrismaClientKnownRequestError, it:
 *   - Returns a message indicating that a particular field (specified in error.meta.target)
 *     already exists in the database for error code 'P2002'.
 *   - Returns a message indicating invalid data for error code 'P2025'.
 *   - Returns a generic database error message for any other known request error codes.
 *
 * - For errors of type Prisma.PrismaClientUnknownRequestError, it returns an unknown
 *   database error message.
 *
 * - For any other Error type, it returns the error's message.
 *
 * @param error - The error object to handle, which can be of any type.
 * @returns A string representing a human-readable description of the error.
 */
export const handleErrors = (error: unknown): string => {
  // Check if the error is an instance of the Error class
  if (error instanceof Error) {
    // Check if the error is of type
    if (error instanceof ZodError) {
      return error.errors.map((e) => e.message).join(', ');
    }

    // Check if the error is of type Prisma.PrismaClientKnownRequestError
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return `This ${(error.meta as unknown as { target: string }).target} already exists in the database`;
        case 'P2025':
          return 'The provided data is invalid';
        default:
          return 'A Database error occurred';
      }
    }

    // Check if the error is of type Prisma.PrismaClientUnknownRequestError
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return 'An unknown database error occurred';
    }

    // Return the error message
    return error.message;
  }

  return 'An error occurred';
};