import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

type ErrorResponse = {
  statusCode: number;
  message: string;
};


/**
 * Handles errors from Prisma and returns an appropriate error response.
 *
 * @param error - The error object to handle.
 * @returns An object containing the status code and error message.
 */
export function handleError(error: unknown): ErrorResponse {
  if (error instanceof PrismaClientKnownRequestError) {
    const target = (error.meta?.target as string[])?.join(', ') || 'information';

    switch (error.code) {
      case 'P2002':
        return {
          statusCode: 409,
          message: `This ${target} is already in use. Please try something different.`,
        };
      case 'P2003':
        return {
          statusCode: 400,
          message: 'The item you\'re trying to reference doesn\'t exist.',
        };
      case 'P2025':
        return {
          statusCode: 404,
          message: 'We couldn\'t find what you\'re looking for.',
        };
      case 'P2000':
        return {
          statusCode: 400,
          message: 'The value you entered is too long. Please shorten it and try again.',
        };
      case 'P2001':
      case 'P2015':
      case 'P2018':
        return {
          statusCode: 404,
          message: 'The requested item could not be found.',
        };
      case 'P2004':
        return {
          statusCode: 400,
          message: 'The operation couldn\'t be completed due to system constraints.',
        };
      case 'P2005':
      case 'P2006':
        return {
          statusCode: 400,
          message: 'The value you provided isn\'t valid for this field.',
        };
      case 'P2007':
        return {
          statusCode: 400,
          message: 'The data you provided isn\'t formatted correctly.',
        };
      case 'P2011':
        return {
          statusCode: 400,
          message: 'A required field is missing.',
        };
      case 'P2012':
        return {
          statusCode: 400,
          message: 'Missing required value.',
        };
      case 'P2013':
        return {
          statusCode: 400,
          message: 'Missing the required argument.',
        };
      case 'P2014':
        return {
          statusCode: 400,
          message: 'The change you\'re trying to make would violate a connection between items.',
        };
      case 'P2016':
        return {
          statusCode: 400,
          message: 'Error interpreting the query.',
        };
      case 'P2017':
        return {
          statusCode: 400,
          message: 'The records you\'re trying to connect don\'t exist.',
        };
      case 'P2019':
        return {
          statusCode: 400,
          message: 'Input error - please check your data.',
        };
      case 'P2020':
        return {
          statusCode: 400,
          message: 'Value out of range for the type.',
        };
      case 'P2021':
        return {
          statusCode: 500,
          message: 'The database table does not exist.',
        };
      case 'P2022':
        return {
          statusCode: 500,
          message: 'The database column does not exist.',
        };
      case 'P2023':
        return {
          statusCode: 400,
          message: 'Inconsistent column data.',
        };
      case 'P2024':
        return {
          statusCode: 408,
          message: 'Timed out while waiting for a database connection.',
        };
      case 'P2026':
        return {
          statusCode: 400,
          message: 'The current database provider doesn\'t support this operation.',
        };
      case 'P2027':
        return {
          statusCode: 500,
          message: 'Multiple errors occurred during query execution.',
        };
      default:
        return {
          statusCode: 500,
          message: 'Something went wrong with our database. Please try again later.',
        };
    }
  }

  if (error instanceof PrismaClientValidationError) {
    return {
      statusCode: 400,
      message: 'The information you provided isn\'t formatted correctly. Please check your input and try again.',
    };
  }

  if (error instanceof Error) {
    return {
      statusCode: 500,
      message: 'Something unexpected went wrong. Please try again.',
    };
  }

  return {
    statusCode: 500,
    message: 'An unknown error occurred. Please try again later.',
  };
}