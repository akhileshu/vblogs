import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserInterestArgs } from "./args/FindFirstUserInterestArgs";
import { UserInterest } from "../../../models/UserInterest";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class FindFirstUserInterestResolver {
  @TypeGraphQL.Query(_returns => UserInterest, {
    nullable: true
  })
  async findFirstUserInterest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserInterestArgs): Promise<UserInterest | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
