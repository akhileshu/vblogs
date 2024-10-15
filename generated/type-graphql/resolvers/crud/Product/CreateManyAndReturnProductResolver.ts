import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnProductArgs } from "./args/CreateManyAndReturnProductArgs";
import { Product } from "../../../models/Product";
import { CreateManyAndReturnProduct } from "../../outputs/CreateManyAndReturnProduct";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class CreateManyAndReturnProductResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProduct], {
    nullable: false
  })
  async createManyAndReturnProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnProductArgs): Promise<CreateManyAndReturnProduct[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
