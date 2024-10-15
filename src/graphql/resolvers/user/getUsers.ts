import type {
    Context,
    ResponseClass,
} from "@/shared/libs/typeGraphql/response";
import {
    createListResponse,
    executeWithValidation
} from "@/shared/libs/typeGraphql/response";

import { userSchema } from "@/shared/helpers/zodSchema/user/createUser";
import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../../../generated/type-graphql";

const UserListResponse = createListResponse(User);

@Resolver()
export class GetUsersResolver {
  @Query(() => UserListResponse)
  async getUsers(@Ctx() ctx: Context) {
    const executeFn = async (): Promise<
      InstanceType<typeof UserListResponse>
    > => {
      return new UserListResponse({
        success: true,
        data: await ctx.prisma.user.findMany(),
      });
    };

    return executeWithValidation({
      executeFn,
      ResponseClass: UserListResponse as ResponseClass,
      inputValidationSchema: userSchema,
      ctx,
      fallbackErrorMessage: "Failed to get users",
    });
  }
}
