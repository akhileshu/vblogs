/*
  Warnings:

  - Made the column `goalId` on table `Technology` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "BlogPlaylistItemType" AS ENUM ('PLATFORM_BLOG', 'GIT_REPO', 'ARTICLE', 'TUTORIAL');

-- CreateEnum
CREATE TYPE "ExternalLinkedResourceCategory" AS ENUM ('GIT_REPO', 'ARTICLE', 'TUTORIAL');

-- CreateEnum
CREATE TYPE "BlogBookmarkType" AS ENUM ('LIST', 'NO_LIST');

-- CreateEnum
CREATE TYPE "BlogLink_Relation" AS ENUM ('DEPENDS_UPON', 'IS_PREREQUISITE_FOR', 'EXPANDS_ON', 'IS_EXPANDED_BY');

-- CreateEnum
CREATE TYPE "LinkedResourceType" AS ENUM ('INTERNAL', 'EXTERNAL');

-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_goalId_fkey";

-- AlterTable
ALTER TABLE "Technology" ALTER COLUMN "goalId" SET NOT NULL;

-- CreateTable
CREATE TABLE "LinkedResource" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "LinkedResourceType" NOT NULL,
    "title" TEXT,
    "externalResourceCategory" "ExternalLinkedResourceCategory",
    "url" TEXT,
    "linkedBlogId" TEXT,

    CONSTRAINT "LinkedResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogLink" (
    "sourceBlogId" TEXT NOT NULL,
    "targetBlogId" TEXT NOT NULL,
    "relation" "BlogLink_Relation" NOT NULL,
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogReadHistory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "BlogReadHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogBookmark" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "blogBookmarkListId" TEXT,

    CONSTRAINT "BlogBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogBookmarkList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "BlogBookmarkList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPlaylist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "BlogPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPlaylistItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "type" "BlogPlaylistItemType" NOT NULL,
    "blogPlaylistId" TEXT,

    CONSTRAINT "BlogPlaylistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_followingBlogPlaylists" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogLink_sourceBlogId_targetBlogId_key" ON "BlogLink"("sourceBlogId", "targetBlogId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogReadHistory_userId_blogId_key" ON "BlogReadHistory"("userId", "blogId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogBookmark_userId_blogId_key" ON "BlogBookmark"("userId", "blogId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPlaylistItem_blogPlaylistId_order_key" ON "BlogPlaylistItem"("blogPlaylistId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "_followingBlogPlaylists_AB_unique" ON "_followingBlogPlaylists"("A", "B");

-- CreateIndex
CREATE INDEX "_followingBlogPlaylists_B_index" ON "_followingBlogPlaylists"("B");

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedResource" ADD CONSTRAINT "LinkedResource_linkedBlogId_fkey" FOREIGN KEY ("linkedBlogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogLink" ADD CONSTRAINT "BlogLink_sourceBlogId_fkey" FOREIGN KEY ("sourceBlogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogLink" ADD CONSTRAINT "BlogLink_targetBlogId_fkey" FOREIGN KEY ("targetBlogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogReadHistory" ADD CONSTRAINT "BlogReadHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogReadHistory" ADD CONSTRAINT "BlogReadHistory_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogBookmark" ADD CONSTRAINT "BlogBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogBookmark" ADD CONSTRAINT "BlogBookmark_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogBookmark" ADD CONSTRAINT "BlogBookmark_blogBookmarkListId_fkey" FOREIGN KEY ("blogBookmarkListId") REFERENCES "BlogBookmarkList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogPlaylist" ADD CONSTRAINT "BlogPlaylist_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogPlaylistItem" ADD CONSTRAINT "BlogPlaylistItem_blogPlaylistId_fkey" FOREIGN KEY ("blogPlaylistId") REFERENCES "BlogPlaylist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_followingBlogPlaylists" ADD CONSTRAINT "_followingBlogPlaylists_A_fkey" FOREIGN KEY ("A") REFERENCES "BlogPlaylist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_followingBlogPlaylists" ADD CONSTRAINT "_followingBlogPlaylists_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
