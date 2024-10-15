import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnOrderArgs } from "./args/CreateManyAndReturnOrderArgs";
import { Order } from "../../../models/Order";
import { CreateManyAndReturnOrder } from "../../outputs/CreateManyAndReturnOrder";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class CreateManyAndReturnOrderResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnOrder], {
    nullable: false
  })
  async createManyAndReturnOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnOrderArgs): Promise<CreateManyAndReturnOrder[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).order.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
