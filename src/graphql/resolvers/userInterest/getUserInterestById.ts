import { Ctx, Query, Resolver, Arg, ObjectType, Field  } from "type-graphql";
import { UserInterest ,UserInterestWhereUniqueInput} from "../../../../generated/type-graphql";
import { BaseResponse , executeWithValidation } from "@/shared/libs/typeGraphql/response";
import type { Context, ResponseClass, BaseResponseOptions } from "@/shared/libs/typeGraphql/response";

  @ObjectType()
  class GetUserInterestByIdResponse extends BaseResponse< UserInterest | null> {
    @Field(() => UserInterest, { nullable: true })
    data: UserInterest | null;

    constructor(options: BaseResponseOptions< UserInterest | null>) {
      super(options);
      this.data = options.data ?? null;
    }
  }

@Resolver()
export class GetUserInterestByIdResolver {
  @Query(() => GetUserInterestByIdResponse)
  async getUserInterestById(
    @Ctx() ctx: Context,
    @Arg("where") where: UserInterestWhereUniqueInput,
  ) {
    const executeFn = async (): Promise<InstanceType<typeof GetUserInterestByIdResponse>> => {
      const foundUserInterest = await ctx.prisma.userInterest.findUnique({ where})

      if (!foundUserInterest) {
              return new GetUserInterestByIdResponse({
                success: false,
                data: null,
                message: "UserInterest not found",
                status: "NOT_FOUND_ERROR",
              });
            }

      return new GetUserInterestByIdResponse({
        success: true,
        data: foundUserInterest,
      });
    };

    return await executeWithValidation({
      executeFn,
      ResponseClass: GetUserInterestByIdResponse as ResponseClass< UserInterest | null>,
      ctx,
      fallbackErrorMessage: "Failed to get userInterest by ID",
    });
  }
}