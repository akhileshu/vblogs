import { PrismaClient } from "@prisma/client";

export type ResponseClass<T> = new (options: BaseResponseOptions<T>) => unknown;

export interface BaseResponseOptions<T> {
  success: boolean;
  message?: string;
  status?: string;
  data: T;
}

export interface Context {
  prisma: PrismaClient;
}
