import * as fs from "fs";
import * as path from "path";

// Function to load JSON files
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function loadJSONFiles(folderPath: string) {
  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  // Loop through each file
  files.forEach(async (file) => {
    if (path.extname(file) === ".json") {
      // Full path to the JSON file
      const filePath = path.join(folderPath, file);

      // Read and parse the JSON file
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      console.log(`Contents of ${file}:`, data);
      //insert blogcontent

    }
  });
}
