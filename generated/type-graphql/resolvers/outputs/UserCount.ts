import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountOrdersArgs } from "./args/UserCountOrdersArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  orders!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "orders",
    nullable: false
  })
  getOrders(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountOrdersArgs): number {
    return root.orders;
  }
}
