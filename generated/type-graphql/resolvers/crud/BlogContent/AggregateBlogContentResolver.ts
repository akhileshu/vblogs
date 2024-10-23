import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBlogContentArgs } from "./args/AggregateBlogContentArgs";
import { BlogContent } from "../../../models/BlogContent";
import { AggregateBlogContent } from "../../outputs/AggregateBlogContent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BlogContent)
export class AggregateBlogContentResolver {
  @TypeGraphQL.Query(_returns => AggregateBlogContent, {
    nullable: false
  })
  async aggregateBlogContent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBlogContentArgs): Promise<AggregateBlogContent> {
    return getPrismaFromContext(ctx).blogContent.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
