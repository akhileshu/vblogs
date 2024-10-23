import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTagsOnBlogsArgs } from "./args/FindFirstTagsOnBlogsArgs";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class FindFirstTagsOnBlogsResolver {
  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findFirstTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagsOnBlogsArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
