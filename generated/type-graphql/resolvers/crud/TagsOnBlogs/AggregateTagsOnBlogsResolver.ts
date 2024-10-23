import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnBlogsArgs } from "./args/AggregateTagsOnBlogsArgs";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { AggregateTagsOnBlogs } from "../../outputs/AggregateTagsOnBlogs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class AggregateTagsOnBlogsResolver {
  @TypeGraphQL.Query(_returns => AggregateTagsOnBlogs, {
    nullable: false
  })
  async aggregateTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsOnBlogsArgs): Promise<AggregateTagsOnBlogs> {
    return getPrismaFromContext(ctx).tagsOnBlogs.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
