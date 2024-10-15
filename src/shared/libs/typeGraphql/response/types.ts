import { PrismaClient } from "@prisma/client";


export type ResponseClass = new (options: BaseResponse) => unknown;

export interface BaseResponse {
  success: boolean;
  message?: string;
  status?: string;
  data: unknown;
}

export interface Context {
  prisma: PrismaClient;
}

