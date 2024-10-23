import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsOnBlogsArgs } from "./args/FindUniqueTagsOnBlogsArgs";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class FindUniqueTagsOnBlogsResolver {
  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findUniqueTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagsOnBlogsArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
