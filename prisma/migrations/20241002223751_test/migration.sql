-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "blogId" INTEGER NOT NULL,
    "dataSaverUrl" TEXT NOT NULL,
    "highQualityUrl" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentToVideoTimelineMapping" (
    "id" SERIAL NOT NULL,
    "videoId" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "timeline" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentToVideoTimelineMapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogCategorization" (
    "blogId" INTEGER NOT NULL,
    "categoryId" INTEGER,
    "subCategoryId" INTEGER,
    "conceptId" INTEGER
);

-- CreateTable
CREATE TABLE "BlogMetaData" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    "tags" TEXT[],
    "commentsCount" INTEGER NOT NULL,
    "blogId" INTEGER NOT NULL,

    CONSTRAINT "BlogMetaData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concept" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Video_blogId_key" ON "Video"("blogId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentToVideoTimelineMapping_videoId_key" ON "ContentToVideoTimelineMapping"("videoId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentToVideoTimelineMapping_contentId_key" ON "ContentToVideoTimelineMapping"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogCategorization_blogId_key" ON "BlogCategorization"("blogId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogMetaData_blogId_key" ON "BlogMetaData"("blogId");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentToVideoTimelineMapping" ADD CONSTRAINT "ContentToVideoTimelineMapping_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCategorization" ADD CONSTRAINT "BlogCategorization_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCategorization" ADD CONSTRAINT "BlogCategorization_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCategorization" ADD CONSTRAINT "BlogCategorization_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCategorization" ADD CONSTRAINT "BlogCategorization_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogMetaData" ADD CONSTRAINT "BlogMetaData_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
