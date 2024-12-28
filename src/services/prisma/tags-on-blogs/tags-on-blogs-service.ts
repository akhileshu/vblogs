import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createTagsOnBlogs } from "./create-tags-on-blogs";
import { getTagsOnBlogsById } from "./get-tags-on-blogs-by-id";
import { updateTagsOnBlogs } from "./update-tags-on-blogs";
import { deleteTagsOnBlogs } from "./delete-tags-on-blogs";
import { getAllTagsOnBlogss } from "./get-tags-on-blogss";

export class TagsOnBlogsService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createTagsOnBlogs(data: Prisma.TagsOnBlogsCreateInput) {
    await this.beforeAction("create", data);
    const result = await createTagsOnBlogs(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getTagsOnBlogsById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getTagsOnBlogsById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateTagsOnBlogs(id: string, data: Prisma.TagsOnBlogsUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateTagsOnBlogs(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteTagsOnBlogs(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteTagsOnBlogs(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllTagsOnBlogss() {
    await this.beforeAction("getAll", null);
    const result = await getAllTagsOnBlogss(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to TagsOnBlogsService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to TagsOnBlogsService
  }
}



