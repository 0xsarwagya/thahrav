import { handleError } from "@/lib/errors";
import { prisma } from "@/lib/prisma";
import type { BetterAuthPlugin } from "better-auth";
import { createAuthEndpoint } from "better-auth/plugins";
import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Plugin to handle product-related API endpoints.
 */
export const productsPlugin = (): BetterAuthPlugin => {
  return {
    id: "products",
    schema: {
      products: {
        disableMigration: false,
        modelName: "product",
        fields: {
          id: {
            type: "string",
            required: true,
            validator: {
              input: z.string().min(1).max(100),
              output: z.string().min(1).max(100),
            },
            input: true,
            sortable: true,
            unique: true,
          },
          name: {
            type: "string",
            required: true,
            validator: {
              input: z.string().min(1).max(100),
              output: z.string().min(1).max(100),
            },
            input: true,
            sortable: true,
          },
          description: {
            type: "string",
            required: true,
            validator: {
              input: z.string().min(1).max(1000),
              output: z.string().min(1).max(1000),
            },
            input: true,
            sortable: true,
          },
          price: {
            type: "number",
            required: true,
            validator: {
              input: z.number().min(0),
              output: z.number().min(0),
            },
            input: true,
            sortable: true,
          },
          originalPrice: {
            type: "number",
            required: true,
            validator: {
              input: z.number().min(0),
              output: z.number().min(0),
            },
            input: true,
            sortable: true,
          },
          limit: {
            type: "number",
            required: true,
            validator: {
              input: z.number().min(0),
              output: z.number().min(0),
            },
            input: true,
            sortable: true,
          },
          images: {
            type: "string[]",
            required: true,
            validator: {
              input: z.string().min(1).max(1000),
              output: z.string().min(1).max(1000),
            },
            input: true,
            sortable: true,
          },
          sizes: {
            type: "string[]",
            required: true,
            validator: {
              input: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"])),
              output: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"])),
            },
            input: true,
            sortable: true,
          },
          category: {
            type: "string",
            required: true,
            validator: {
              input: z.enum([
                "MENS_CREW",
                "MENS_OVERSIZED",
                "UNISEX_CREW",
                "UNISEX_OVERSIZED",
                "WOMENS_REGULAR",
                "WOMENS_CROPPED_HOODIE",
                "MENS_HOODIE",
                "UNISEX_HOODIE"
              ]),
              output: z.enum([
                "MENS_CREW",
                "MENS_OVERSIZED",
                "UNISEX_CREW",
                "UNISEX_OVERSIZED",
                "WOMENS_REGULAR",
                "WOMENS_CROPPED_HOODIE",
                "MENS_HOODIE",
                "UNISEX_HOODIE"
              ])
            },
            input: true,
            sortable: true,
          },
          qikinkSku: {
            type: "string",
            required: true,
            validator: {
              input: z.string().min(1).max(100),
              output: z.string().min(1).max(100),
            },
            input: true,
            sortable: true,
          },
          designUrl: {
            type: "string",
            required: true,
            validator: {
              input: z.string().min(1).max(100),
              output: z.string().min(1).max(100),
            },
            input: true,
            sortable: true,
          },
          logoUrl: {
            type: "string",
            required: true,
            validator: {
              input: z.string().min(1).max(100),
              output: z.string().min(1).max(100),
            },
            input: true,
            sortable: true,
          },
          createdAt: {
            type: "date",
            required: false,
            validator: {
              input: z.date(),
              output: z.date(),
            },
            defaultValue: new Date(),
            input: true,
            sortable: true,
          },
          updatedAt: {
            type: "date",
            required: false,
            validator: {
              input: z.date(),
              output: z.date(),
            },
            input: true,
            sortable: true,
            defaultValue: new Date(),
          }
        }
      }
    },
    endpoints: {
      /**
       * GET /products
       * 
       * Query Parameters:
       * - id (optional): If provided, fetches the product by ID. Otherwise, fetches all products.
       */
      allProducts: createAuthEndpoint(
        "/products",
        {
          method: "GET",
          query: z.object({
            id: z.string().optional(),
          }),
        },
        async (req) => {
          try {
            // If an ID is provided, fetch a single product by ID
            if (req.query.id) {
              console.log("ID is set:", req.query.id);
              const product = await prisma.products.findUnique({
                where: { id: req.query.id },
              });

              if (!product) {
                return NextResponse.json(
                  { error: "Product not found" },
                  { status: 404 }
                );
              }

              return product;
            }

            // Otherwise, return all products
            const allProducts = await prisma.products.findMany();
            return allProducts;
          } catch (error) {
            const errorData = handleError(error);
            return NextResponse.json(
              { error: errorData.message },
              { status: errorData.statusCode }
            );
          }
        }
      ),

      /**
       * GET /products/featured
       * 
       * Returns a list of 3 featured products.
       * Currently, this simply returns the first 3 products from the database.
       * You may later filter by a `featured` flag or similar.
       */
      featuredProducts: createAuthEndpoint(
        "/products/featured",
        {
          method: "GET",
        },
        async () => {
          try {
            const featured = await prisma.products.findMany({
              take: 3,
            });

            return featured;
          } catch (error) {
            const errorData = handleError(error);
            return NextResponse.json(
              { error: errorData.message },
              { status: errorData.statusCode }
            );
          }
        }
      ),
    },
  };
};
