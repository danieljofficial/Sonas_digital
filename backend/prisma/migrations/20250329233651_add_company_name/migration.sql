/*
  Warnings:

  - You are about to drop the column `Colours` on the `BrandKit` table. All the data in the column will be lost.
  - You are about to drop the column `Fonts` on the `BrandKit` table. All the data in the column will be lost.
  - Added the required column `comanyName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BrandKit" DROP COLUMN "Colours",
DROP COLUMN "Fonts",
ADD COLUMN     "colours" TEXT[],
ADD COLUMN     "fonts" TEXT[];

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "comanyName" TEXT NOT NULL;
