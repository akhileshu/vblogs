import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Blog } from "../../../models/Blog";
import { Video } from "../../../models/Video";
import { VideoSection } from "../../../models/VideoSection";
import { VideoSectionsArgs } from "./args/VideoSectionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Video)
export class VideoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Blog, {
    nullable: false
  })
  async blog(@TypeGraphQL.Root() video: Video, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Blog> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).video.findUniqueOrThrow({
      where: {
        id: video.id,
      },
    }).blog({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VideoSection], {
    nullable: false
  })
  async sections(@TypeGraphQL.Root() video: Video, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VideoSectionsArgs): Promise<VideoSection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).video.findUniqueOrThrow({
      where: {
        id: video.id,
      },
    }).sections({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
