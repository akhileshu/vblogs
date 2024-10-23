import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Blog } from "../../../models/Blog";
import { Tag } from "../../../models/Tag";
import { Technology } from "../../../models/Technology";
import { Topic } from "../../../models/Topic";
import { UserInterest } from "../../../models/UserInterest";
import { TopicBlogsArgs } from "./args/TopicBlogsArgs";
import { TopicTagsArgs } from "./args/TopicTagsArgs";
import { TopicTechnologyArgs } from "./args/TopicTechnologyArgs";
import { TopicUserInterestsArgs } from "./args/TopicUserInterestsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Topic)
export class TopicRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Technology, {
    nullable: true
  })
  async Technology(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TopicTechnologyArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).topic.findUniqueOrThrow({
      where: {
        id: topic.id,
      },
    }).Technology({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Blog], {
    nullable: false
  })
  async Blogs(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TopicBlogsArgs): Promise<Blog[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).topic.findUniqueOrThrow({
      where: {
        id: topic.id,
      },
    }).Blogs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Tag], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TopicTagsArgs): Promise<Tag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).topic.findUniqueOrThrow({
      where: {
        id: topic.id,
      },
    }).tags({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [UserInterest], {
    nullable: false
  })
  async userInterests(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TopicUserInterestsArgs): Promise<UserInterest[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).topic.findUniqueOrThrow({
      where: {
        id: topic.id,
      },
    }).userInterests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
