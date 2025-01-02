import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createTopic } from "./create-topic";
import { getTopicById } from "./get-topic-by-id";
import { updateTopic } from "./update-topic";
import { deleteTopic } from "./delete-topic";
import { getAllTopics } from "./get-topics";
import { getTopicsByTechnologyId } from "./get-topics-by-technology-id";

export class TopicService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createTopic(data: Prisma.TopicCreateInput) {
    await this.beforeAction("create", data);
    const result = await createTopic(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getTopicById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getTopicById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateTopic(id: string, data: Prisma.TopicUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateTopic(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteTopic(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteTopic(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllTopics() {
    await this.beforeAction("getAll", null);
    const result = await getAllTopics(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }
  async getTopicsByTechnologyId(technologyId: string) {
    const result = await getTopicsByTechnologyId(this.prisma, technologyId);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to TopicService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to TopicService
  }
}



