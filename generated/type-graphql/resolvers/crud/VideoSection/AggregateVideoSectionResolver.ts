import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVideoSectionArgs } from "./args/AggregateVideoSectionArgs";
import { VideoSection } from "../../../models/VideoSection";
import { AggregateVideoSection } from "../../outputs/AggregateVideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class AggregateVideoSectionResolver {
  @TypeGraphQL.Query(_returns => AggregateVideoSection, {
    nullable: false
  })
  async aggregateVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVideoSectionArgs): Promise<AggregateVideoSection> {
    return getPrismaFromContext(ctx).videoSection.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
