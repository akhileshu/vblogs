"use server";

import { executeDynamicSeedAction } from "../libs/executeDynamicSeedAction";
import { ACTIONS } from "../types/types";
import { getPrismaModels } from "./getAllModels";

export async function handleSeedAction(
  models: string[],
  action: (typeof ACTIONS)[keyof typeof ACTIONS]
): Promise<string> {
  const prismaModels = await getPrismaModels()
  if (!models || models.length === 0) {
    throw new Error("No models selected.");
  }

  const invalidModels = models.filter((model) => !prismaModels.includes(model));
  if (invalidModels.length > 0) {
    throw new Error(`Invalid models: ${invalidModels.join(", ")}`);
  }

  for (const model of models) {
    await executeDynamicSeedAction(model, action); // Perform the action on each model
  }

  return `${action} successfully executed for models: ${models.join(", ")}`;
}
