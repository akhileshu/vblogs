import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTechnologyArgs } from "./args/CreateManyAndReturnTechnologyArgs";
import { Technology } from "../../../models/Technology";
import { CreateManyAndReturnTechnology } from "../../outputs/CreateManyAndReturnTechnology";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Technology)
export class CreateManyAndReturnTechnologyResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTechnology], {
    nullable: false
  })
  async createManyAndReturnTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTechnologyArgs): Promise<CreateManyAndReturnTechnology[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
