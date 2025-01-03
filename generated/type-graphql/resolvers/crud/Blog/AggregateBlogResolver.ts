import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBlogArgs } from "./args/AggregateBlogArgs";
import { Blog } from "../../../models/Blog";
import { AggregateBlog } from "../../outputs/AggregateBlog";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blog)
export class AggregateBlogResolver {
  @TypeGraphQL.Query(_returns => AggregateBlog, {
    nullable: false
  })
  async aggregateBlog(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBlogArgs): Promise<AggregateBlog> {
    return getPrismaFromContext(ctx).blog.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
