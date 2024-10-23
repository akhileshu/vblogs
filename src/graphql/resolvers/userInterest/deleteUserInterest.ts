import { Ctx, Mutation, Resolver, Arg, ObjectType, Field  } from "type-graphql";
import { UserInterestWhereUniqueInput } from "../../../../generated/type-graphql";
import { BaseResponse , executeWithValidation } from "@/shared/libs/typeGraphql/response";
import type { Context, ResponseClass, BaseResponseOptions } from "@/shared/libs/typeGraphql/response";

  @ObjectType()
  class DeleteUserInterestResponse extends BaseResponse<boolean | null> {
    @Field(() => Boolean, { nullable: true })
    data: boolean | null;

    constructor(options: BaseResponseOptions<boolean | null>) {
      super(options);
      this.data = options.data ?? null;
    }
  }

@Resolver()
export class DeleteUserInterestResolver {
  @Mutation(() => DeleteUserInterestResponse)
  async deleteUserInterest(
    @Ctx() ctx: Context,
   @Arg("where") where: UserInterestWhereUniqueInput,
  ) {
    const executeFn = async (): Promise<InstanceType<typeof DeleteUserInterestResponse>> => {
      const deletedUserInterest = await ctx.prisma.userInterest.delete({ where });

      if (!deletedUserInterest) {
        return new DeleteUserInterestResponse({
          success: false,
          data: null,
          message: "Failed to delete UserInterest",
          status: "DELETION_ERROR",
        });
      }
      return new DeleteUserInterestResponse({ success: true, data: true });
    };

    return await executeWithValidation({
      executeFn,
      ResponseClass: DeleteUserInterestResponse as ResponseClass<boolean | null>,
      ctx,
      fallbackErrorMessage: "Failed to delete userInterest",
    });
  }
}