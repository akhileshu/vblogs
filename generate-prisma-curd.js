import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";
import { readFileSync } from "fs";

// Function to extract model names from schema.prisma
function getModelNamesFromSchema(schemaPath) {
  const schemaContent = readFileSync(schemaPath, "utf8");
  const modelRegex = /model\s+(\w+)/g; // Regex to find model definitions
  const models = [];
  let match;

  while ((match = modelRegex.exec(schemaContent)) !== null) {
    models.push({ name: match[1] }); // Push model name into models array
  }

  return models;
}

function generateCrudFunctionStubs(models, baseDir) {
  // Check if the base directory already exists
  if (existsSync(baseDir)) {
    console.log(`Directory "${baseDir}" already exists. No changes made.`);
    return; // Return early if the directory exists
  }

  // Create the base directory if it doesn't exist
  mkdirSync(baseDir, { recursive: true });

  models.forEach((model) => {
    const modelName = model.name; // Original model name
    const lowerCaseModelName =
      modelName.charAt(0).toLowerCase() + modelName.slice(1); // Lowercase model name for the filename

    // Generate CRUD function code with the new naming conventions
    const crudFunctions = `


export async function create${modelName}(data) {
  
}

export async function get${modelName}s() {
   
}

export async function get${modelName}ById(id) {
  
}

export async function update${modelName}(id, data) {
  
}

export async function delete${modelName}(id) {
   
}
    `;

    // Write the generated functions to the respective file
    const filePath = resolve(baseDir, `${lowerCaseModelName}.js`); // Create a file for each model in the base directory
    writeFileSync(filePath, crudFunctions.trim(), "utf8");

    console.log(`CRUD functions generated in ${filePath}`);
  });
}

// Example usage
const schemaPath = "./prisma/schema.prisma"; // Path to your schema.prisma file
const baseDir = "./crud"; // This will create a "crud" folder containing model files

// Get model names from schema.prisma
const models = getModelNamesFromSchema(schemaPath);
generateCrudFunctionStubs(models, baseDir);
