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
    const result = await createTag(this.prisma, data);
    return result;
  }

  async getTagById(id: string) {
    const result = await getTagById(this.prisma, id);
    return result;
  }

  async updateTag(id: string, data: Prisma.TagUpdateInput) {
    const result = await updateTag(this.prisma, id, data);
    return result;
  }

  async deleteTag(id: string) {
    const result = await deleteTag(this.prisma, id);
    return result;
  }

  async getAllTags() {
    const result = await getAllTags(this.prisma);
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



