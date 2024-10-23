import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBlogArgs } from "./args/CreateManyAndReturnBlogArgs";
import { Blog } from "../../../models/Blog";
import { CreateManyAndReturnBlog } from "../../outputs/CreateManyAndReturnBlog";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blog)
export class CreateManyAndReturnBlogResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBlog], {
    nullable: false
  })
  async createManyAndReturnBlog(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBlogArgs): Promise<CreateManyAndReturnBlog[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).blog.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
