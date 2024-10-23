import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
});

export type UserInput = z.infer<typeof userSchema>;
