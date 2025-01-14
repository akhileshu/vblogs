import type { Prisma, PrismaClient ,LinkedResource } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createLinkedResource } from "./create-linked-resource";
import { getLinkedResourceById } from "./get-linked-resource-by-id";
import { updateLinkedResource } from "./update-linked-resource";
import { deleteLinkedResource } from "./delete-linked-resource";
import { getAllLinkedResources } from "./get-all-linked-resources";

interface LinkedResourceService {
  createLinkedResource(data: Prisma.LinkedResourceCreateInput): Promise<LinkedResource>;
  getLinkedResourceById(id: string): Promise<LinkedResource | null>;
  updateLinkedResource(id: string, data: Prisma.LinkedResourceUpdateInput): Promise<LinkedResource>;
  deleteLinkedResource(id: string): Promise<LinkedResource>;
  getAllLinkedResources(): Promise<LinkedResource[]>;
}

export type LinkedResourceServiceReturnType<T extends keyof LinkedResourceService> = Awaited<
  ReturnType<LinkedResourceService[T]>
>;

export class LinkedResourceServiceImplementation extends BaseService implements LinkedResourceService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createLinkedResource(data: Prisma.LinkedResourceCreateInput) {
    await this.beforeAction("createLinkedResource", data);
    const result = await createLinkedResource(this.prisma, data);
    await this.afterAction("reateLinkedResource", result);
    return result;
  }

  async getLinkedResourceById(id: string) {
    await this.beforeAction("getLinkedResourceById", id);
    const result = await getLinkedResourceById(this.prisma, id);
    await this.afterAction("getLinkedResourceById", result);
    return result;
  }

  async updateLinkedResource(id: string, data: Prisma.LinkedResourceUpdateInput) {
    await this.beforeAction("updateLinkedResource", { id, data });
    const result = await updateLinkedResource(this.prisma, id, data);
    await this.afterAction("updateLinkedResource", result);
    return result;
  }

  async deleteLinkedResource(id: string) {
    await this.beforeAction("deleteLinkedResource", id);
    const result = await deleteLinkedResource(this.prisma, id);
    await this.afterAction("deleteLinkedResource", result);
    return result;
  }

  async getAllLinkedResources() {
    await this.beforeAction("getAllLinkedResources", null);
    const result = await getAllLinkedResources(this.prisma);
    await this.afterAction("getAllLinkedResources", result);
    return result;
  }

  // <AUTO-GENERATED METHODS>

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to LinkedResourceService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to LinkedResourceService
  }
}



