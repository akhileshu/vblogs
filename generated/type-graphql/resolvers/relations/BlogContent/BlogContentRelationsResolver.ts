import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Blog } from "../../../models/Blog";
import { BlogContent } from "../../../models/BlogContent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlogContent)
export class BlogContentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Blog, {
    nullable: false
  })
  async Blog(@TypeGraphQL.Root() blogContent: BlogContent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Blog> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blogContent.findUniqueOrThrow({
      where: {
        id: blogContent.id,
      },
    }).Blog({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
