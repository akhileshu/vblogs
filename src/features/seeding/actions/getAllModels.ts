"use server";

import fs from "fs";
import path from "path";

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

    const prismaModels = fs
      .readdirSync(MODELS_FOLDER_PATH, { withFileTypes: true })
      .filter((entry) => entry.isDirectory()) 
      .map((directory) => directory.name); 

    return prismaModels;
  } catch (error) {
    console.error("Error reading models folder:", error);
    return []; 
  }
}
