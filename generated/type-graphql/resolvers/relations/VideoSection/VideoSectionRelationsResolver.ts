import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Video } from "../../../models/Video";
import { VideoSection } from "../../../models/VideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class VideoSectionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Video, {
    nullable: false
  })
  async Video(@TypeGraphQL.Root() videoSection: VideoSection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Video> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findUniqueOrThrow({
      where: {
        id: videoSection.id,
      },
    }).Video({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
