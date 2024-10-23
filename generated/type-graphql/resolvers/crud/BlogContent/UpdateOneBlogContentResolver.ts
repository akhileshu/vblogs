import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBlogContentArgs } from "./args/UpdateOneBlogContentArgs";
import { BlogContent } from "../../../models/BlogContent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlogContent)
export class UpdateOneBlogContentResolver {
  @TypeGraphQL.Mutation(_returns => BlogContent, {
    nullable: true
  })
  async updateOneBlogContent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneBlogContentArgs): Promise<BlogContent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blogContent.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
