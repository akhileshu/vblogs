import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneVideoSectionArgs } from "./args/DeleteOneVideoSectionArgs";
import { VideoSection } from "../../../models/VideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class DeleteOneVideoSectionResolver {
  @TypeGraphQL.Mutation(_returns => VideoSection, {
    nullable: true
  })
  async deleteOneVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVideoSectionArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
