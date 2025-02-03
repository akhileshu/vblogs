import type { PrismaClient } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateUserInterestSchemaType } from "@/shared/types/models/user-interest";

export async function createUserInterest(
  prisma: PrismaClient,
  {
    technologyIds,
    topicIds,
  }: CreateUserInterestSchemaType,
  userId: string
) {
  try {
    const fieldErrors: FieldErrors<CreateUserInterestSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    const interestType = technologyIds ? "TECHNOLOGY" : "TOPIC";
    const ids = technologyIds || topicIds;
    if (!ids?.length)
      throw new Error("invalid input for technology or topic Id's");
    for (const id of ids) {
      await prisma.userInterest.create({
        data: {
          interestType,
          userId,
          ...(interestType === "TECHNOLOGY"
            ? { technologyId: id }
            : { topicId: id }),
        },
      });
    }
    return { message: "User interests successfully added." };
  } catch (error) {
    throw error;
  }
}
