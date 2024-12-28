import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createVideo } from "./create-video";
import { getVideoById } from "./get-video-by-id";
import { updateVideo } from "./update-video";
import { deleteVideo } from "./delete-video";
import { getAllVideos } from "./get-videos";

export class VideoService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createVideo(data: Prisma.VideoCreateInput) {
    await this.beforeAction("create", data);
    const result = await createVideo(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getVideoById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getVideoById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateVideo(id: string, data: Prisma.VideoUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateVideo(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteVideo(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteVideo(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllVideos() {
    await this.beforeAction("getAll", null);
    const result = await getAllVideos(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to VideoService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to VideoService
  }
}



