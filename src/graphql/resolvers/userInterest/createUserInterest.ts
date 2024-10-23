import { Ctx, Mutation, Resolver, Arg, ObjectType, Field  } from "type-graphql";
import { UserInterest,UserInterestCreateInput } from "../../../../generated/type-graphql";
import { BaseResponse , executeWithValidation } from "@/shared/libs/typeGraphql/response";
import type { Context, ResponseClass, BaseResponseOptions } from "@/shared/libs/typeGraphql/response";

  @ObjectType()
  class CreateUserInterestResponse extends BaseResponse< UserInterest | null> {
    @Field(() => UserInterest, { nullable: true })
    data: UserInterest | null;

    constructor(options: BaseResponseOptions< UserInterest | null>) {
      super(options);
      this.data = options.data ?? null;
    }
  }


@Resolver()
export class CreateUserInterestResolver {
  @Mutation(() => CreateUserInterestResponse)
  async createUserInterest(
    @Ctx() ctx: Context,
    @Arg("createUserInterestInput") createUserInterestInput: UserInterestCreateInput
  ) {
    const executeFn = async (): Promise<InstanceType<typeof CreateUserInterestResponse>> => {
      const createdUserInterest = await ctx.prisma.userInterest.create({ data:createUserInterestInput })

      if (!createdUserInterest) {
        return new CreateUserInterestResponse({
          success: false,
          data: null,
          message: "Failed to create UserInterest",
          status: "CREATION_ERROR",
        });
      }

      return new CreateUserInterestResponse({
        success: true,
        data: createdUserInterest,
      });
    };

    return await executeWithValidation({
      executeFn,
      ResponseClass: CreateUserInterestResponse as ResponseClass< UserInterest | null>,
      ctx,
      fallbackErrorMessage: "Failed to create userInterest",
    });
  }
}