import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createTechnology } from "./create-technology";
import { getTechnologyById } from "./get-technology-by-id";
import { updateTechnology } from "./update-technology";
import { deleteTechnology } from "./delete-technology";
import { getAllTechnologys } from "./get-technologys";

export class TechnologyService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createTechnology(data: Prisma.TechnologyCreateInput) {
    await this.beforeAction("create", data);
    const result = await createTechnology(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getTechnologyById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getTechnologyById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateTechnology(id: string, data: Prisma.TechnologyUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateTechnology(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteTechnology(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteTechnology(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllTechnologys() {
    await this.beforeAction("getAll", null);
    const result = await getAllTechnologys(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to TechnologyService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to TechnologyService
  }
}



