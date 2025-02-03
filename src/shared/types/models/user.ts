import { z } from "zod";

export const UpdateUserSchema = z.object({
  name: z.string().optional(),
  image: z.instanceof(File).optional(),
});

export type UpdateUserSchemaType = z.infer<typeof UpdateUserSchema>;
