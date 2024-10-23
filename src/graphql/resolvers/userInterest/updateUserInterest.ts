import { Ctx, Mutation, Resolver, Arg, ObjectType, Field  } from "type-graphql";
import { UserInterest, UserInterestWhereUniqueInput ,UserInterestUpdateInput } from "../../../../generated/type-graphql";
import { BaseResponse , executeWithValidation } from "@/shared/libs/typeGraphql/response";
import type { Context, ResponseClass, BaseResponseOptions } from "@/shared/libs/typeGraphql/response";

  @ObjectType()
  class UpdateUserInterestResponse extends BaseResponse< UserInterest | null> {
    @Field(() => UserInterest, { nullable: true })
    data: UserInterest | null;

    constructor(options: BaseResponseOptions< UserInterest | null>) {
      super(options);
      this.data = options.data ?? null;
    }
  }

@Resolver()
export class UpdateUserInterestResolver {
  @Mutation(() => UpdateUserInterestResponse)
  async updateUserInterest(
    @Ctx() ctx: Context,
     @Arg("where") where: UserInterestWhereUniqueInput,
    @Arg("updateUserInterestInput") updateUserInterestInput: UserInterestUpdateInput
  ) {
    const executeFn = async (): Promise<InstanceType<typeof UpdateUserInterestResponse>> => {

    const updatedUserInterest = await ctx.prisma.userInterest.update({
            where,
            data:updateUserInterestInput,
          });

          if (!updatedUserInterest) {
            return new UpdateUserInterestResponse({
              success: false,
              data: null,
              message: "Failed to update UserInterest",
              status: "UPDATE_ERROR",
            });
          }

      return new UpdateUserInterestResponse({
        success: true,
        data: updatedUserInterest,
      });
    };

    return await executeWithValidation({
      executeFn,
      ResponseClass: UpdateUserInterestResponse as ResponseClass< UserInterest | null>,
      ctx,
      fallbackErrorMessage: "Failed to update userInterest",
    });
  }
}