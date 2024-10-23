import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUserInterestArgs } from "./args/CreateManyAndReturnUserInterestArgs";
import { UserInterest } from "../../../models/UserInterest";
import { CreateManyAndReturnUserInterest } from "../../outputs/CreateManyAndReturnUserInterest";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class CreateManyAndReturnUserInterestResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUserInterest], {
    nullable: false
  })
  async createManyAndReturnUserInterest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUserInterestArgs): Promise<CreateManyAndReturnUserInterest[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
