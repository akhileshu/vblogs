import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVideoSectionOrThrowArgs } from "./args/FindFirstVideoSectionOrThrowArgs";
import { VideoSection } from "../../../models/VideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class FindFirstVideoSectionOrThrowResolver {
  @TypeGraphQL.Query(_returns => VideoSection, {
    nullable: true
  })
  async findFirstVideoSectionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVideoSectionOrThrowArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
