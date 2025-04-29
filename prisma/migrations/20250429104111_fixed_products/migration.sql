/*
  Warnings:

  - You are about to drop the column `care` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `culturalBackground` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `story` on the `products` table. All the data in the column will be lost.
  - The `sizes` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categories` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `limit` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `products` table without a default value. This is not possible if the table is not empty.
  - Made the column `price` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "SIZE" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "CATEGORY" AS ENUM ('MENS_CREW', 'MENS_OVERSIZED', 'UNISEX_CREW', 'UNISEX_OVERSIZED', 'WOMENS_REGULAR', 'WOMENS_CROPPED_HOODIE', 'MENS_HOODIE', 'UNISEX_HOODIE');

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- DropIndex
DROP INDEX "products_id_key";

-- DropIndex
DROP INDEX "products_slug_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "care",
DROP COLUMN "category",
DROP COLUMN "culturalBackground",
DROP COLUMN "details",
DROP COLUMN "slug",
DROP COLUMN "story",
ADD COLUMN     "categories" "CATEGORY" NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "limit" INTEGER NOT NULL,
ADD COLUMN     "metadata" JSONB NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
DROP COLUMN "sizes",
ADD COLUMN     "sizes" "SIZE"[];

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "phoneNumber" SET NOT NULL;

-- DropTable
DROP TABLE "orders";
