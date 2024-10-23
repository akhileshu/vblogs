import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Technology } from "../../../models/Technology";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { UserInterest } from "../../../models/UserInterest";
import { UserInterestTechnologyArgs } from "./args/UserInterestTechnologyArgs";
import { UserInterestTopicArgs } from "./args/UserInterestTopicArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserInterest)
export class UserInterestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userInterest: UserInterest, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.findUniqueOrThrow({
      where: {
        id: userInterest.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Technology, {
    nullable: true
  })
  async Technology(@TypeGraphQL.Root() userInterest: UserInterest, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserInterestTechnologyArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.findUniqueOrThrow({
      where: {
        id: userInterest.id,
      },
    }).Technology({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Topic, {
    nullable: true
  })
  async Topic(@TypeGraphQL.Root() userInterest: UserInterest, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserInterestTopicArgs): Promise<Topic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userInterest.findUniqueOrThrow({
      where: {
        id: userInterest.id,
      },
    }).Topic({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
