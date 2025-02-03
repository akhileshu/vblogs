import { z } from "zod";

export const csvUUIDSchema = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val) return true; // Allow undefined or empty values
      const ids = val.split(",").map((id) => id.trim());
      return ids.every((id) => z.string().uuid().safeParse(id).success);
    },
    { message: "Each item in the CSV must be a valid UUID" }
  );

//todo : improve this - for optional fields
// export const UUIDSchema = z.string().transform((tagsString) => {
//   const parsedTags = JSON.parse(tagsString);
//   return z.array(z.string().uuid("Invalid Tag ID")).parse(parsedTags); //After parsing the JSON string, the parsedTags is validated against an array of tagSchema objects.
// });
export const UUIDSchema = z
  .string()
  .optional()
  .transform((tagsString) => {
    if (tagsString) {
      const parsedTags = JSON.parse(tagsString);
      return z.array(z.string().uuid("Invalid Tag ID")).parse(parsedTags); //After parsing the JSON string, the parsedTags is validated against an array of tagSchema objects.
    }
  });
