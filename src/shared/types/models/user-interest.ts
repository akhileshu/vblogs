import { IdSchema } from "@/shared/lib/zod";
import { UUIDSchema } from "@/shared/lib/zod/csvUUIDSchema";
import { z } from "zod";

export const CreateUserInterestSchema = z.object({
  topicIds: UUIDSchema,
  technologyIds: UUIDSchema,
});
export type CreateUserInterestSchemaType = z.infer<
  typeof CreateUserInterestSchema
>;
export const DeleteUserInterestSchema = z.object({
  userInterestId: IdSchema,
});

export type DeleteUserInterestSchemaType = z.infer<
  typeof DeleteUserInterestSchema
>;
