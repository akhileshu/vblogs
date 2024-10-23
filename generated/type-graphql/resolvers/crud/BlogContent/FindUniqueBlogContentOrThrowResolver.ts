import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBlogContentOrThrowArgs } from "./args/FindUniqueBlogContentOrThrowArgs";
import { BlogContent } from "../../../models/BlogContent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlogContent)
export class FindUniqueBlogContentOrThrowResolver {
  @TypeGraphQL.Query(_returns => BlogContent, {
    nullable: true
  })
  async getBlogContent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBlogContentOrThrowArgs): Promise<BlogContent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blogContent.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
