import type { Prisma, PrismaClient ,TagsOnBlogs } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createTagsOnBlogs } from "./create-tags-on-blogs";
import { getTagsOnBlogsById } from "./get-tags-on-blogs-by-id";
import { updateTagsOnBlogs } from "./update-tags-on-blogs";
import { deleteTagsOnBlogs } from "./delete-tags-on-blogs";
import { getAllTagsOnBlogss } from "./get-all-tags-on-blogss";

interface TagsOnBlogsService {
  createTagsOnBlogs(data: Prisma.TagsOnBlogsCreateInput): Promise<TagsOnBlogs>;
  getTagsOnBlogsById(id: string): Promise<TagsOnBlogs | null>;
  updateTagsOnBlogs(id: string, data: Prisma.TagsOnBlogsUpdateInput): Promise<TagsOnBlogs>;
  deleteTagsOnBlogs(id: string): Promise<TagsOnBlogs>;
  getAllTagsOnBlogss(): Promise<TagsOnBlogs[]>;
}

export type TagsOnBlogsServiceReturnType<T extends keyof TagsOnBlogsService> = Awaited<
  ReturnType<TagsOnBlogsService[T]>
>;

export class TagsOnBlogsServiceImplementation extends BaseService implements TagsOnBlogsService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createTagsOnBlogs(data: Prisma.TagsOnBlogsCreateInput) {
    const result = await createTagsOnBlogs(this.prisma, data);
    return result;
  }

  async getTagsOnBlogsById(id: string) {
    const result = await getTagsOnBlogsById(this.prisma, id);
    return result;
  }

  async updateTagsOnBlogs(id: string, data: Prisma.TagsOnBlogsUpdateInput) {
    const result = await updateTagsOnBlogs(this.prisma, id, data);
    return result;
  }

  async deleteTagsOnBlogs(id: string) {
    const result = await deleteTagsOnBlogs(this.prisma, id);
    return result;
  }

  async getAllTagsOnBlogss() {
    const result = await getAllTagsOnBlogss(this.prisma);
    return result;
  }

  // <AUTO-GENERATED METHODS>

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to TagsOnBlogsService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to TagsOnBlogsService
  }
}



