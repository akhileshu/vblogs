import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserInterestArgs } from "./args/UpdateOneUserInterestArgs";
import { UserInterest } from "../../../models/UserInterest";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class UpdateOneUserInterestResolver {
  @TypeGraphQL.Mutation(_returns => UserInterest, {
    nullable: true
  })
  async updateOneUserInterest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserInterestArgs): Promise<UserInterest | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
