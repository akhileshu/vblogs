import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGoalArgs } from "./args/AggregateGoalArgs";
import { Goal } from "../../../models/Goal";
import { AggregateGoal } from "../../outputs/AggregateGoal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Goal)
export class AggregateGoalResolver {
  @TypeGraphQL.Query(_returns => AggregateGoal, {
    nullable: false
  })
  async aggregateGoal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGoalArgs): Promise<AggregateGoal> {
    return getPrismaFromContext(ctx).goal.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
