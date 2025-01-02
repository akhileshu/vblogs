"use server";

import fs from "fs";
import path from "path";
import { getCachedModelRowCount } from "./get-model-row-count";

export async function getPrismaModelsForSeed() {
  const MODELS_FOLDER_PATH = path.join(
    process.cwd(),
    "src",
    "features",
    "seeding",
    "libs",
    "models"
  );

  try {
    return fs
      .readdirSync(MODELS_FOLDER_PATH, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((directory) => directory.name);
  } catch (error) {
    console.error("Error reading models folder:", error);
    return [];
  }
}

export const getModelCountList = async () => {
  const modelCountList = await Promise.all(
    (
      await getPrismaModelsForSeed()
    )?.map(async (model) => {
      const rowCount = await getCachedModelRowCount(model);
      return { model, rowCount };
    })
  );

  return modelCountList;
};
