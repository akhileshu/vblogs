import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Blog } from "../../../models/Blog";
import { BlogContent } from "../../../models/BlogContent";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
import { BlogAuthorArgs } from "./args/BlogAuthorArgs";
import { BlogContentArgs } from "./args/BlogContentArgs";
import { BlogTagsArgs } from "./args/BlogTagsArgs";
import { BlogTopicArgs } from "./args/BlogTopicArgs";
import { BlogVideoArgs } from "./args/BlogVideoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blog)
export class BlogRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Topic, {
    nullable: true
  })
  async topic(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BlogTopicArgs): Promise<Topic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blog.findUniqueOrThrow({
      where: {
        id: blog.id,
      },
    }).topic({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnBlogs], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BlogTagsArgs): Promise<TagsOnBlogs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blog.findUniqueOrThrow({
      where: {
        id: blog.id,
      },
    }).tags({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async author(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BlogAuthorArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blog.findUniqueOrThrow({
      where: {
        id: blog.id,
      },
    }).author({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => BlogContent, {
    nullable: true
  })
  async content(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BlogContentArgs): Promise<BlogContent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blog.findUniqueOrThrow({
      where: {
        id: blog.id,
      },
    }).content({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Video, {
    nullable: true
  })
  async Video(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BlogVideoArgs): Promise<Video | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blog.findUniqueOrThrow({
      where: {
        id: blog.id,
      },
    }).Video({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
