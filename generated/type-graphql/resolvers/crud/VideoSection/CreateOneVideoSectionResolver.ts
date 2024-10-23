import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneVideoSectionArgs } from "./args/CreateOneVideoSectionArgs";
import { VideoSection } from "../../../models/VideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class CreateOneVideoSectionResolver {
  @TypeGraphQL.Mutation(_returns => VideoSection, {
    nullable: false
  })
  async createOneVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVideoSectionArgs): Promise<VideoSection> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
