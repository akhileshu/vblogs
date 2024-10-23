import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Goal } from "../../../models/Goal";
import { Technology } from "../../../models/Technology";
import { GoalTechnologiesArgs } from "./args/GoalTechnologiesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Goal)
export class GoalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Technology], {
    nullable: false
  })
  async Technologies(@TypeGraphQL.Root() goal: Goal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GoalTechnologiesArgs): Promise<Technology[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).goal.findUniqueOrThrow({
      where: {
        id: goal.id,
      },
    }).Technologies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
