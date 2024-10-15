import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCountProductsArgs } from "./args/OrderCountProductsArgs";

@TypeGraphQL.ObjectType("OrderCount", {})
export class OrderCount {
  products!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "products",
    nullable: false
  })
  getProducts(@TypeGraphQL.Root() root: OrderCount, @TypeGraphQL.Args() args: OrderCountProductsArgs): number {
    return root.products;
  }
}
