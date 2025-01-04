-- DropForeignKey
ALTER TABLE "BlogContent" DROP CONSTRAINT "BlogContent_blogId_fkey";

-- AddForeignKey
ALTER TABLE "BlogContent" ADD CONSTRAINT "BlogContent_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
