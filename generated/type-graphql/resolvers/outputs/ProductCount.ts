import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCountCategoriesArgs } from "./args/ProductCountCategoriesArgs";
import { ProductCountOrdersArgs } from "./args/ProductCountOrdersArgs";

@TypeGraphQL.ObjectType("ProductCount", {})
export class ProductCount {
  categories!: number;
  orders!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "categories",
    nullable: false
  })
  getCategories(@TypeGraphQL.Root() root: ProductCount, @TypeGraphQL.Args() args: ProductCountCategoriesArgs): number {
    return root.categories;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "orders",
    nullable: false
  })
  getOrders(@TypeGraphQL.Root() root: ProductCount, @TypeGraphQL.Args() args: ProductCountOrdersArgs): number {
    return root.orders;
  }
}
