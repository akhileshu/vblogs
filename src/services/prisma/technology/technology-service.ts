import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createTechnology } from "./create-technology";
import { getTechnologyById } from "./get-technology-by-id";
import { updateTechnology } from "./update-technology";
import { deleteTechnology } from "./delete-technology";
import { getAllTechnologys } from "./get-technologys";
import { getTechnologiesByGoalId } from "./get-technologies-by-goal-id";

export class TechnologyService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createTechnology(data: Prisma.TechnologyCreateInput) {
    const result = await createTechnology(this.prisma, data);
    return result;
  }

  async getTechnologyById(id: string) {
    const result = await getTechnologyById(this.prisma, id);
    return result;
  }

  async updateTechnology(id: string, data: Prisma.TechnologyUpdateInput) {
    const result = await updateTechnology(this.prisma, id, data);
    return result;
  }

  async deleteTechnology(id: string) {
    const result = await deleteTechnology(this.prisma, id);
    return result;
  }

  async getAllTechnologys() {
    const result = await getAllTechnologys(this.prisma);
    return result;
  }
  async getTechnologiesByGoalId(goalId: string) {
    const result = await getTechnologiesByGoalId(this.prisma, goalId);
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



