import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTagArgs } from "./args/CreateManyAndReturnTagArgs";
import { Tag } from "../../../models/Tag";
import { CreateManyAndReturnTag } from "../../outputs/CreateManyAndReturnTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class CreateManyAndReturnTagResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTag], {
    nullable: false
  })
  async createManyAndReturnTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTagArgs): Promise<CreateManyAndReturnTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tag.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
