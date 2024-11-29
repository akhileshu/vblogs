"use server";

import fs from "fs";
import path from "path";
import { getCachedRowCount } from "../libs/row-count-actions";

export async function getPrismaModels() {
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
      await getPrismaModels()
    )?.map(async (model) => {
      const rowCount = await getCachedRowCount(model);
      return { model, rowCount };
    })
  );

  return modelCountList;
};
