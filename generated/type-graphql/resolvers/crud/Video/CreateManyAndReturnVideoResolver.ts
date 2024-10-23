import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVideoArgs } from "./args/CreateManyAndReturnVideoArgs";
import { Video } from "../../../models/Video";
import { CreateManyAndReturnVideo } from "../../outputs/CreateManyAndReturnVideo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Video)
export class CreateManyAndReturnVideoResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVideo], {
    nullable: false
  })
  async createManyAndReturnVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVideoArgs): Promise<CreateManyAndReturnVideo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).video.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
