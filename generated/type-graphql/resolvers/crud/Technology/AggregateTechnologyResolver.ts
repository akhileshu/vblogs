import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTechnologyArgs } from "./args/AggregateTechnologyArgs";
import { Technology } from "../../../models/Technology";
import { AggregateTechnology } from "../../outputs/AggregateTechnology";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Technology)
export class AggregateTechnologyResolver {
  @TypeGraphQL.Query(_returns => AggregateTechnology, {
    nullable: false
  })
  async aggregateTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTechnologyArgs): Promise<AggregateTechnology> {
    return getPrismaFromContext(ctx).technology.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
