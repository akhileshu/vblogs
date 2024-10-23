import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVideoSectionArgs } from "./args/CreateManyAndReturnVideoSectionArgs";
import { VideoSection } from "../../../models/VideoSection";
import { CreateManyAndReturnVideoSection } from "../../outputs/CreateManyAndReturnVideoSection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VideoSection)
export class CreateManyAndReturnVideoSectionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVideoSection], {
    nullable: false
  })
  async createManyAndReturnVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVideoSectionArgs): Promise<CreateManyAndReturnVideoSection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
