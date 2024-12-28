"use server";
import { ACTIONS } from "../types/types";
import { getPrismaModels } from "./get-prisma-model-list";

export async function handleSeedAction(
  models: string[],
  action: (typeof ACTIONS)[keyof typeof ACTIONS]
): Promise<string> {
  const prismaModels = await getPrismaModels();
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



export async function executeDynamicSeedAction(
  model: string,
  action: (typeof ACTIONS)[keyof typeof ACTIONS]
): Promise<void> {
  const seedLogicModule = await import(`../libs/models/${model}/${action}`);

  if (typeof seedLogicModule[action] !== "function") {
    throw new Error(
      `Function ${action} not found in module src/features/seeding/libs/models/${model}/${action}`
    );
  }

  await seedLogicModule[action](); // e.g., deleteAll() or bulkInsert()
}