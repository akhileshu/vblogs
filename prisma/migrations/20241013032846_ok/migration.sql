/*
  Warnings:

  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogCategorization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogMetaData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Concept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContentToVideoTimelineMapping` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BlogCategorization" DROP CONSTRAINT "BlogCategorization_blogId_fkey";

-- DropForeignKey
ALTER TABLE "BlogCategorization" DROP CONSTRAINT "BlogCategorization_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "BlogCategorization" DROP CONSTRAINT "BlogCategorization_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "BlogCategorization" DROP CONSTRAINT "BlogCategorization_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "BlogMetaData" DROP CONSTRAINT "BlogMetaData_blogId_fkey";

-- DropForeignKey
ALTER TABLE "Concept" DROP CONSTRAINT "Concept_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ContentToVideoTimelineMapping" DROP CONSTRAINT "ContentToVideoTimelineMapping_videoId_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_blogId_fkey";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "BlogCategorization";

-- DropTable
DROP TABLE "BlogMetaData";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Concept";

-- DropTable
DROP TABLE "ContentToVideoTimelineMapping";

-- DropTable
DROP TABLE "SubCategory";

-- DropTable
DROP TABLE "Video";

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
