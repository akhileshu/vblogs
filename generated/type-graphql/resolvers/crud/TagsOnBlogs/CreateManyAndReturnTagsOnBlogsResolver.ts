import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTagsOnBlogsArgs } from "./args/CreateManyAndReturnTagsOnBlogsArgs";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { CreateManyAndReturnTagsOnBlogs } from "../../outputs/CreateManyAndReturnTagsOnBlogs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class CreateManyAndReturnTagsOnBlogsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTagsOnBlogs], {
    nullable: false
  })
  async createManyAndReturnTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTagsOnBlogsArgs): Promise<CreateManyAndReturnTagsOnBlogs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
