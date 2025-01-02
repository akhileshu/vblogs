import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createBlog } from "./create-blog";
import { getBlogById } from "./get-blog-by-id";
import { updateBlog } from "./update-blog";
import { deleteBlog } from "./delete-blog";
import { getAllBlogs } from "./get-blogs";
import { getBlogContentBySlug } from "./get-blog-content-by-slug";
import { getBlogsByAuthorId } from "./get-blogs-by-author-id";
import { getBlogSearchResults } from "./get-blog-search-results";
import { AddBlogMetadataInput, BlogSearchQueryParameters, SaveBlogContentInput } from "@/shared/types/models/blog";
import { addBlogMetadata } from "./add-blog-metadata";

import { saveBlogContent } from "./save-blog-content";
import { getServerSessionUserByRole } from "@/features/Auth/utils/getServerSessionUtils";

export class BlogService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  private async getLoggedInAuthor() {
    const user = await getServerSessionUserByRole("AUTHOR");
    if (!user) throw new Error("Please login as an author.");
    return user;
  }
  async createBlog(data: Prisma.BlogCreateInput) {
    await this.beforeAction("create", data);
    const result = await createBlog(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getBlogById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getBlogById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateBlog(id: string, data: Prisma.BlogUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateBlog(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteBlog(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteBlog(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllBlogs() {
    await this.beforeAction("getAll", null);
    const result = await getAllBlogs(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  async getBlogContentBySlug(slug: string) {
    await this.beforeAction("getBlogContentBySlug", slug);
    const result = await getBlogContentBySlug(this.prisma, slug);
    await this.afterAction("getBlogContentBySlug", result);
    return result;
  }
  async getBlogSearchResults(params: BlogSearchQueryParameters) {
    const result = await getBlogSearchResults(this.prisma, params);
    return result;
  }
  async getBlogsByAuthorId(authorId: string) {
    const result = await getBlogsByAuthorId(this.prisma, authorId);
    return result;
  }
  async addBlogMetadata(data: AddBlogMetadataInput) {
    const author = await this.getLoggedInAuthor();
    const result = await addBlogMetadata(this.prisma, data, author.id);
    return result;
  }
  async saveBlogContent(data: SaveBlogContentInput) {
    await this.getLoggedInAuthor();
    return await saveBlogContent(this.prisma, data);
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to BlogService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to BlogService
  }
}
