import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserInterestArgs } from "./args/DeleteOneUserInterestArgs";
import { UserInterest } from "../../../models/UserInterest";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class DeleteOneUserInterestResolver {
  @TypeGraphQL.Mutation(_returns => UserInterest, {
    nullable: true
  })
  async deleteOneUserInterest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserInterestArgs): Promise<UserInterest | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
