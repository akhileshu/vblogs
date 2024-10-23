import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsOnBlogsOrThrowArgs } from "./args/FindUniqueTagsOnBlogsOrThrowArgs";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class FindUniqueTagsOnBlogsOrThrowResolver {
  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findUniqueTagsOnBlogsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagsOnBlogsOrThrowArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
