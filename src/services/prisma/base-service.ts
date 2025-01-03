import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

//cannot be instantiated directly - must be extended
//contains both concrete(can be inherited/overridden) and abstract methods(meant to be overridden by subclasses)

export abstract class BaseService {
  constructor(protected readonly prisma: PrismaClient) {}

  protected async beforeAction(action: string, data: unknown) {
    this.log(`[Before ${action}]`, data);
    // Shared pre-action logic
  }

  protected async afterAction(action: string, result: unknown) {
    this.log(`[After ${action}]`, result);
    // Shared post-action logic
  }

  protected log(action: string, payload: unknown) {
    console.log(`[BaseService] Action: ${action}, Payload:`, payload);
    const logFilePath = path.join(process.cwd(), "logfile.log");

    const timestamp = new Date().toLocaleString();
    const logMessage = `[${timestamp}] [BaseService] Action: ${action}, Payload: ${JSON.stringify(
      payload
    )}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file", err);
      }
    });
  }

  protected handleError(error: unknown) {
    console.error("An error occurred:", error);
    throw new Error("Something went wrong");
  }
}
