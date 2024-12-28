import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createBlog } from "./create-blog";
import { getBlogById } from "./get-blog-by-id";
import { updateBlog } from "./update-blog";
import { deleteBlog } from "./delete-blog";
import { getAllBlogs } from "./get-blogs";

export class BlogService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
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

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to BlogService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to BlogService
  }
}



