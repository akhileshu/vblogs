import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createBlogContent } from "./create-blog-content";
import { getBlogContentById } from "./get-blog-content-by-id";
import { updateBlogContent } from "./update-blog-content";
import { deleteBlogContent } from "./delete-blog-content";
import { getAllBlogContents } from "./get-blog-contents";

export class BlogContentService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createBlogContent(data: Prisma.BlogContentCreateInput) {
    await this.beforeAction("create", data);
    const result = await createBlogContent(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getBlogContentById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getBlogContentById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateBlogContent(id: string, data: Prisma.BlogContentUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateBlogContent(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteBlogContent(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteBlogContent(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllBlogContents() {
    await this.beforeAction("getAll", null);
    const result = await getAllBlogContents(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to BlogContentService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to BlogContentService
  }
}



