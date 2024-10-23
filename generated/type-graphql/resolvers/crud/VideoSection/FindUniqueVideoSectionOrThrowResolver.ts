import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVideoSectionOrThrowArgs } from "./args/FindUniqueVideoSectionOrThrowArgs";
import { VideoSection } from "../../../models/VideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class FindUniqueVideoSectionOrThrowResolver {
  @TypeGraphQL.Query(_returns => VideoSection, {
    nullable: true
  })
  async getVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVideoSectionOrThrowArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
