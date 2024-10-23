import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBlogContentArgs } from "./args/CreateManyAndReturnBlogContentArgs";
import { BlogContent } from "../../../models/BlogContent";
import { CreateManyAndReturnBlogContent } from "../../outputs/CreateManyAndReturnBlogContent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlogContent)
export class CreateManyAndReturnBlogContentResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBlogContent], {
    nullable: false
  })
  async createManyAndReturnBlogContent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBlogContentArgs): Promise<CreateManyAndReturnBlogContent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blogContent.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
