/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "city" TEXT,
ADD COLUMN     "flatOrHouseNumber" TEXT,
ADD COLUMN     "line_one" TEXT,
ADD COLUMN     "line_two" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "stateOrUT" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
