import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createTag } from "./create-tag";
import { getTagById } from "./get-tag-by-id";
import { updateTag } from "./update-tag";
import { deleteTag } from "./delete-tag";
import { getAllTags } from "./get-tags";
import { getTagsByTopicId } from "./get-tags-by-topic-id";

export class TagService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createTag(data: Prisma.TagCreateInput) {
    await this.beforeAction("create", data);
    const result = await createTag(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getTagById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getTagById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateTag(id: string, data: Prisma.TagUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateTag(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteTag(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteTag(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllTags() {
    await this.beforeAction("getAll", null);
    const result = await getAllTags(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }
  async getTagsByTopicId(topicId: string) {
    const result = await getTagsByTopicId(this.prisma,topicId);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to TagService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to TagService
  }
}



