import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createVideoSection } from "./create-video-section";
import { getVideoSectionById } from "./get-video-section-by-id";
import { updateVideoSection } from "./update-video-section";
import { deleteVideoSection } from "./delete-video-section";
import { getAllVideoSections } from "./get-video-sections";

export class VideoSectionService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createVideoSection(data: Prisma.VideoSectionCreateInput) {
    await this.beforeAction("create", data);
    const result = await createVideoSection(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getVideoSectionById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getVideoSectionById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateVideoSection(id: string, data: Prisma.VideoSectionUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateVideoSection(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteVideoSection(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteVideoSection(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllVideoSections() {
    await this.beforeAction("getAll", null);
    const result = await getAllVideoSections(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to VideoSectionService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to VideoSectionService
  }
}



