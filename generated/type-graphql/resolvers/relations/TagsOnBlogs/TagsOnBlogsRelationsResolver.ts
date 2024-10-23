import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Blog } from "../../../models/Blog";
import { Tag } from "../../../models/Tag";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class TagsOnBlogsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async Tag(@TypeGraphQL.Root() tagsOnBlogs: TagsOnBlogs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findUniqueOrThrow({
      where: {
        id: tagsOnBlogs.id,
      },
    }).Tag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Blog, {
    nullable: false
  })
  async Blog(@TypeGraphQL.Root() tagsOnBlogs: TagsOnBlogs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Blog> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findUniqueOrThrow({
      where: {
        id: tagsOnBlogs.id,
      },
    }).Blog({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
