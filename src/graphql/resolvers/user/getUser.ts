import {
  createItemResponse,
  executeWithValidation,
} from "@/shared/libs/typeGraphql/response";
import type {
  Context,
  ResponseClass,
} from "@/shared/libs/typeGraphql/response";

import { userSchema } from "@/shared/helpers/zodSchema/user/createUser";
import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../../../generated/type-graphql";

const UserItemResponse = createItemResponse(User);

@Resolver()
export class GetUserResolver {
  @Query(() => UserItemResponse)
  async getUser(
    @Ctx() ctx: Context
    // @Arg("id", () => String, { nullable: true }) id: string
  ) {
    const executeFn = async (): Promise<
      InstanceType<typeof UserItemResponse>
    > => {
      return new UserItemResponse({
        success: true,
        data: await ctx.prisma.user.findFirst(),
      });
    };

    return await executeWithValidation({
      executeFn,
      ResponseClass: UserItemResponse as ResponseClass,
      inputValidationSchema: userSchema,
      ctx,
      fallbackErrorMessage: "Failed to get user",
    });
  }
}
