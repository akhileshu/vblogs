import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createUserInterest } from "./create-user-interest";
import { getUserInterestById } from "./get-user-interest-by-id";
import { updateUserInterest } from "./update-user-interest";
import { deleteUserInterest } from "./delete-user-interest";
import { getAllUserInterests } from "./get-user-interests";

export class UserInterestService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createUserInterest(data: Prisma.UserInterestCreateInput) {
    await this.beforeAction("create", data);
    const result = await createUserInterest(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getUserInterestById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getUserInterestById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateUserInterest(id: string, data: Prisma.UserInterestUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateUserInterest(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteUserInterest(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteUserInterest(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllUserInterests() {
    await this.beforeAction("getAll", null);
    const result = await getAllUserInterests(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to UserInterestService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to UserInterestService
  }
}



