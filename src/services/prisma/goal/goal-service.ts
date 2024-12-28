import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createGoal } from "./create-goal";
import { getGoalById } from "./get-goal-by-id";
import { updateGoal } from "./update-goal";
import { deleteGoal } from "./delete-goal";
import { getAllGoals } from "./get-goals";

export class GoalService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createGoal(data: Prisma.GoalCreateInput) {
    await this.beforeAction("create", data);
    const result = await createGoal(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getGoalById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getGoalById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateGoal(id: string, data: Prisma.GoalUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateGoal(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteGoal(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteGoal(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllGoals() {
    await this.beforeAction("getAll", null);
    const result = await getAllGoals(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to GoalService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to GoalService
  }
}



