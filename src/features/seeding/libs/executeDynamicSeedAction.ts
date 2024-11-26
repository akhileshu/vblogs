import { ACTIONS } from "../types/types";

export async function executeDynamicSeedAction(
  model: string,
  action: (typeof ACTIONS)[keyof typeof ACTIONS]
): Promise<void> {
  const seedLogicModule = await import(`./models/${model}/${action}`);

  if (typeof seedLogicModule[action] !== "function") {
    throw new Error(
      `Function ${action} not found in module ./logic/${action}-${model}`
    );
  }

  await seedLogicModule[action](); // e.g., deleteAll() or bulkInsert()
}
