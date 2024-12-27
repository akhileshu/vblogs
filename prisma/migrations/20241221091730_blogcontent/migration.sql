/*
  Warnings:

  - Added the required column `fullContent` to the `BlogContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogContent" ADD COLUMN     "fullContent" JSONB NOT NULL,
ALTER COLUMN "intro" DROP NOT NULL,
ALTER COLUMN "implementation" DROP NOT NULL,
ALTER COLUMN "advanced" DROP NOT NULL;
