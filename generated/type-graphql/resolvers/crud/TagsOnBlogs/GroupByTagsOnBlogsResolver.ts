import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTagsOnBlogsArgs } from "./args/GroupByTagsOnBlogsArgs";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { TagsOnBlogsGroupBy } from "../../outputs/TagsOnBlogsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class GroupByTagsOnBlogsResolver {
  @TypeGraphQL.Query(_returns => [TagsOnBlogsGroupBy], {
    nullable: false
  })
  async groupByTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagsOnBlogsArgs): Promise<TagsOnBlogsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
