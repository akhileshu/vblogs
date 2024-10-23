import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserInterestArgs } from "./args/AggregateUserInterestArgs";
import { UserInterest } from "../../../models/UserInterest";
import { AggregateUserInterest } from "../../outputs/AggregateUserInterest";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class AggregateUserInterestResolver {
  @TypeGraphQL.Query(_returns => AggregateUserInterest, {
    nullable: false
  })
  async aggregateUserInterest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserInterestArgs): Promise<AggregateUserInterest> {
    return getPrismaFromContext(ctx).userInterest.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
