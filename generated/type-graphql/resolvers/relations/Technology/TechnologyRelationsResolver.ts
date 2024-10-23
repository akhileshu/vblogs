import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Goal } from "../../../models/Goal";
import { Technology } from "../../../models/Technology";
import { Topic } from "../../../models/Topic";
import { UserInterest } from "../../../models/UserInterest";
import { TechnologyGoalArgs } from "./args/TechnologyGoalArgs";
import { TechnologyTopicsArgs } from "./args/TechnologyTopicsArgs";
import { TechnologyUserInterestsArgs } from "./args/TechnologyUserInterestsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Technology)
export class TechnologyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Topic], {
    nullable: false
  })
  async Topics(@TypeGraphQL.Root() technology: Technology, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TechnologyTopicsArgs): Promise<Topic[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findUniqueOrThrow({
      where: {
        id: technology.id,
      },
    }).Topics({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Goal, {
    nullable: true
  })
  async Goal(@TypeGraphQL.Root() technology: Technology, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TechnologyGoalArgs): Promise<Goal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findUniqueOrThrow({
      where: {
        id: technology.id,
      },
    }).Goal({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [UserInterest], {
    nullable: false
  })
  async userInterests(@TypeGraphQL.Root() technology: Technology, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TechnologyUserInterestsArgs): Promise<UserInterest[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findUniqueOrThrow({
      where: {
        id: technology.id,
      },
    }).userInterests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
