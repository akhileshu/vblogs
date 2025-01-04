-- DropForeignKey
ALTER TABLE "TagsOnBlogs" DROP CONSTRAINT "TagsOnBlogs_blogId_fkey";

-- AddForeignKey
ALTER TABLE "TagsOnBlogs" ADD CONSTRAINT "TagsOnBlogs_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
