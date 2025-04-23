import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { readingTime } from "reading-time-estimator";

/**
 * Collection configuration for journal posts
 * Handles MDX content with metadata validation and transformation
 */
const posts = defineCollection({
    name: "journal",
    directory: "journal",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string().max(200),
        date: z.string(),
        category: z.enum([
            "Craftsmanship",
            "Heritage",
            "Sustainability",
            "Fashion",
            "Artisan Stories",
            "Culture"
        ]),
        image: z.string(),
    }),
    transform: async (document, context) => {
        // Compile MDX content
        const body = await compileMDX(context, document);

        // Configure date formatting options
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
            day: "numeric",
        };

        // Format the date string
        const formattedDate = new Date(document.date).toLocaleDateString(
            "en-US",
            options,
        );

        // Return transformed document with additional computed fields
        return {
            ...document,
            readingTime: readingTime(document.content).text,
            content: body,
            date: formattedDate,
            slug: document.title
                .replaceAll(/[^a-zA-Z ]/g, "")
                .replaceAll(" ", "-")
                .toLowerCase(),
        };
    },
});

/**
 * Export content collection configuration
 */
export default defineConfig({
    collections: [posts],
});