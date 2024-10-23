import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserInterestArgs } from "./args/GroupByUserInterestArgs";
import { UserInterest } from "../../../models/UserInterest";
import { UserInterestGroupBy } from "../../outputs/UserInterestGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class GroupByUserInterestResolver {
  @TypeGraphQL.Query(_returns => [UserInterestGroupBy], {
    nullable: false
  })
  async groupByUserInterest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserInterestArgs): Promise<UserInterestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
