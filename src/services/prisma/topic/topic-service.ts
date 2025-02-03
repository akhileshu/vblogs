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
    const result = await createTopic(this.prisma, data);
    return result;
  }

  async getTopicById(id: string) {
    const result = await getTopicById(this.prisma, id);
    return result;
  }

  async updateTopic(id: string, data: Prisma.TopicUpdateInput) {
    const result = await updateTopic(this.prisma, id, data);
    return result;
  }

  async deleteTopic(id: string) {
    const result = await deleteTopic(this.prisma, id);
    return result;
  }

  async getAllTopics() {
    const result = await getAllTopics(this.prisma);
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



