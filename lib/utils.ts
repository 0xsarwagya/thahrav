import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// biome-ignore lint/style/useNodejsImportProtocol: Better auth does not support nodejs imports
import crypto from "crypto"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Fetches data from a URL and returns the JSON response
 * @param args - Tuple containing the request URL and optional request configuration
 * @returns Promise that resolves to the JSON response
 */
export const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json())

/**
 * Verifies the authenticity of a webhook request by comparing signatures
 * @param timestamp - The timestamp of the webhook request
 * @param secretKey - The secret key used for signing
 * @param rawBody - The raw request body
 * @param receivedSignature - The signature received with the webhook
 * @returns boolean indicating whether the signature is valid
 */
export const verifyWebhookSignature = (
  timestamp: string,
  secretKey: string,
  rawBody: string,
  receivedSignature: string
): boolean => {
  const data = timestamp + rawBody
  const computedSignature = crypto
    .createHmac("sha256", secretKey)
    .update(data)
    .digest("base64")
  return computedSignature === receivedSignature
}