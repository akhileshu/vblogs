import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { User } from "../../../models/User";
import { OrderCustomerArgs } from "./args/OrderCustomerArgs";
import { OrderProductsArgs } from "./args/OrderProductsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async customer(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: OrderCustomerArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).order.findUniqueOrThrow({
      where: {
        id: order.id,
      },
    }).customer({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async products(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: OrderProductsArgs): Promise<Product[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).order.findUniqueOrThrow({
      where: {
        id: order.id,
      },
    }).products({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
