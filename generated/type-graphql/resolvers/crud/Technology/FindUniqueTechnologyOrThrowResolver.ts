import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTechnologyOrThrowArgs } from "./args/FindUniqueTechnologyOrThrowArgs";
import { Technology } from "../../../models/Technology";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Technology)
export class FindUniqueTechnologyOrThrowResolver {
  @TypeGraphQL.Query(_returns => Technology, {
    nullable: true
  })
  async getTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTechnologyOrThrowArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
