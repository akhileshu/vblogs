import type { Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createUser } from "./create-user";
import { getUserById } from "./get-user-by-id";
import { updateUser } from "./update-user";
import { deleteUser } from "./delete-user";
import { getAllUsers } from "./get-users";

export class UserService extends BaseService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createUser(data: Prisma.UserCreateInput) {
    await this.beforeAction("create", data);
    const result = await createUser(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getUserById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getUserById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateUser(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteUser(id: string) {
    await this.beforeAction("delete", id);
    const result = await deleteUser(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllUsers() {
    await this.beforeAction("getAll", null);
    const result = await getAllUsers(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to UserService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to UserService
  }
}



