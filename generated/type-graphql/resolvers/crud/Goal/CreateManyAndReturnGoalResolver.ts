import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGoalArgs } from "./args/CreateManyAndReturnGoalArgs";
import { Goal } from "../../../models/Goal";
import { CreateManyAndReturnGoal } from "../../outputs/CreateManyAndReturnGoal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Goal)
export class CreateManyAndReturnGoalResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGoal], {
    nullable: false
  })
  async createManyAndReturnGoal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGoalArgs): Promise<CreateManyAndReturnGoal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).goal.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
