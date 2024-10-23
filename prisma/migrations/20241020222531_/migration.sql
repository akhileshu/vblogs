/*
  Warnings:

  - You are about to drop the `Blog_Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blog_Tag" DROP CONSTRAINT "Blog_Tag_blogId_fkey";

-- DropForeignKey
ALTER TABLE "Blog_Tag" DROP CONSTRAINT "Blog_Tag_tagId_fkey";

-- DropTable
DROP TABLE "Blog_Tag";

-- CreateTable
CREATE TABLE "TagsOnBlogs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tagId" INTEGER NOT NULL,
    "blogId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnBlogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TagsOnBlogs_blogId_tagId_key" ON "TagsOnBlogs"("blogId", "tagId");

-- AddForeignKey
ALTER TABLE "TagsOnBlogs" ADD CONSTRAINT "TagsOnBlogs_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnBlogs" ADD CONSTRAINT "TagsOnBlogs_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
