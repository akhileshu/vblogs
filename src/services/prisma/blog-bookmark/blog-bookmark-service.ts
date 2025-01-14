import type { Prisma, PrismaClient ,BlogBookmark } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createBlogBookmark } from "./create-blog-bookmark";
import { getBlogBookmarkById } from "./get-blog-bookmark-by-id";
import { updateBlogBookmark } from "./update-blog-bookmark";
import { deleteBlogBookmark } from "./delete-blog-bookmark";
import { getAllBlogBookmarks } from "./get-all-blog-bookmarks";

interface BlogBookmarkService {
  createBlogBookmark(data: Prisma.BlogBookmarkCreateInput): Promise<BlogBookmark>;
  getBlogBookmarkById(id: string): Promise<BlogBookmark | null>;
  updateBlogBookmark(id: string, data: Prisma.BlogBookmarkUpdateInput): Promise<BlogBookmark>;
  deleteBlogBookmark(id: string): Promise<BlogBookmark>;
  getAllBlogBookmarks(): Promise<BlogBookmark[]>;
}

export type BlogBookmarkServiceReturnType<T extends keyof BlogBookmarkService> = Awaited<
  ReturnType<BlogBookmarkService[T]>
>;

export class BlogBookmarkServiceImplementation extends BaseService implements BlogBookmarkService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createBlogBookmark(data: Prisma.BlogBookmarkCreateInput) {
    await this.beforeAction("createBlogBookmark", data);
    const result = await createBlogBookmark(this.prisma, data);
    await this.afterAction("reateBlogBookmark", result);
    return result;
  }

  async getBlogBookmarkById(id: string) {
    await this.beforeAction("getBlogBookmarkById", id);
    const result = await getBlogBookmarkById(this.prisma, id);
    await this.afterAction("getBlogBookmarkById", result);
    return result;
  }

  async updateBlogBookmark(id: string, data: Prisma.BlogBookmarkUpdateInput) {
    await this.beforeAction("updateBlogBookmark", { id, data });
    const result = await updateBlogBookmark(this.prisma, id, data);
    await this.afterAction("updateBlogBookmark", result);
    return result;
  }

  async deleteBlogBookmark(id: string) {
    await this.beforeAction("deleteBlogBookmark", id);
    const result = await deleteBlogBookmark(this.prisma, id);
    await this.afterAction("deleteBlogBookmark", result);
    return result;
  }

  async getAllBlogBookmarks() {
    await this.beforeAction("getAllBlogBookmarks", null);
    const result = await getAllBlogBookmarks(this.prisma);
    await this.afterAction("getAllBlogBookmarks", result);
    return result;
  }

  // <AUTO-GENERATED METHODS>

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to BlogBookmarkService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to BlogBookmarkService
  }
}



