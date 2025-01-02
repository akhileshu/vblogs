import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { getWatchedVideosByUserId } from "./get-watched-videos-by-user-id";


export class UserBlogVideoService extends BaseService {
  getWatchedVideosCountByUserId(undefined: undefined): any {
    throw new Error("Method not implemented.");
  }
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async getWatchedVideosByUserId(data: any) {
    await this.beforeAction("getWatchedVideosByUserId", data);
    const result = await getWatchedVideosByUserId(this.prisma, data);
    await this.afterAction("getWatchedVideosByUserId", result);
    return result;
  }


  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to UserBlogVideoService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to UserBlogVideoService
  }
}



