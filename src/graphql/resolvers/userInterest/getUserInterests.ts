import { Ctx, Query, Resolver, ObjectType, Field  } from "type-graphql";
import { UserInterest } from "../../../../generated/type-graphql";
import { BaseResponse , executeWithValidation } from "@/shared/libs/typeGraphql/response";
import type { Context, ResponseClass, BaseResponseOptions } from "@/shared/libs/typeGraphql/response";

  @ObjectType()
  class GetUserInterestsResponse extends BaseResponse< UserInterest[] | null> {
    @Field(() => [UserInterest], { nullable: true })
    data: UserInterest[] | null;

    constructor(options: BaseResponseOptions< UserInterest[] | null>) {
      super(options);
      this.data = options.data ?? null;
    }
  }

@Resolver()
export class GetUserInterestsResolver {
  @Query(() => GetUserInterestsResponse)
  async getUserInterests(@Ctx() ctx: Context) {
    const executeFn = async (): Promise<InstanceType<typeof GetUserInterestsResponse>> => {
      const allUserInterests = await ctx.prisma.userInterest.findMany()

      if (!allUserInterests || allUserInterests.length === 0) {
        return new GetUserInterestsResponse({
          success: false,
          data: [],
          message: "No UserInterest found",
          status: "NOT_FOUND_ERROR",
        });
      }

      return new GetUserInterestsResponse({
        success: true,
        data: allUserInterests,
      });
    };

    return await executeWithValidation({
      executeFn,
      ResponseClass: GetUserInterestsResponse as ResponseClass< UserInterest[] | null>,
      ctx,
      fallbackErrorMessage: "Failed to get userInterests",
    });
  }
}