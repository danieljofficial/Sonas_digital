-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imagePublicId" TEXT,
ALTER COLUMN "baseImageUrl" DROP NOT NULL;
