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
    const result = await createGoal(this.prisma, data);
    return result;
  }

  async getGoalById(id: string) {
    const result = await getGoalById(this.prisma, id);
    return result;
  }

  async updateGoal(id: string, data: Prisma.GoalUpdateInput) {
    const result = await updateGoal(this.prisma, id, data);
    return result;
  }

  async deleteGoal(id: string) {
    const result = await deleteGoal(this.prisma, id);
    return result;
  }

  async getAllGoals() {
    const result = await getAllGoals(this.prisma);
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



