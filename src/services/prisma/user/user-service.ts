import type { Prisma, PrismaClient ,User } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createUser } from "./create-user";
import { getUserById } from "./get-user-by-id";
import { updateUser } from "./update-user";
import { deleteUser } from "./delete-user";
import { getAllUsers } from "./get-all-users";

interface UserService {
  createUser(data: Prisma.UserCreateInput): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User>;
  deleteUser(id: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
}

export type UserServiceReturnType<T extends keyof UserService> = Awaited<
  ReturnType<UserService[T]>
>;

export class UserServiceImplementation extends BaseService implements UserService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createUser(data: Prisma.UserCreateInput) {
    await this.beforeAction("createUser", data);
    const result = await createUser(this.prisma, data);
    await this.afterAction("reateUser", result);
    return result;
  }

  async getUserById(id: string) {
    await this.beforeAction("getUserById", id);
    const result = await getUserById(this.prisma, id);
    await this.afterAction("getUserById", result);
    return result;
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    await this.beforeAction("updateUser", { id, data });
    const result = await updateUser(this.prisma, id, data);
    await this.afterAction("updateUser", result);
    return result;
  }

  async deleteUser(id: string) {
    await this.beforeAction("deleteUser", id);
    const result = await deleteUser(this.prisma, id);
    await this.afterAction("deleteUser", result);
    return result;
  }

  async getAllUsers() {
    await this.beforeAction("getAllUsers", null);
    const result = await getAllUsers(this.prisma);
    await this.afterAction("getAllUsers", result);
    return result;
  }

  // <AUTO-GENERATED METHODS>

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to UserService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to UserService
  }
}


