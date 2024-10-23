import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVideoSectionArgs } from "./args/GroupByVideoSectionArgs";
import { VideoSection } from "../../../models/VideoSection";
import { VideoSectionGroupBy } from "../../outputs/VideoSectionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class GroupByVideoSectionResolver {
  @TypeGraphQL.Query(_returns => [VideoSectionGroupBy], {
    nullable: false
  })
  async groupByVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVideoSectionArgs): Promise<VideoSectionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
