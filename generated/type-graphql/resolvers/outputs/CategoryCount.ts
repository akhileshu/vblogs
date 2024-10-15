import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountProductsArgs } from "./args/CategoryCountProductsArgs";

@TypeGraphQL.ObjectType("CategoryCount", {})
export class CategoryCount {
  products!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "products",
    nullable: false
  })
  getProducts(@TypeGraphQL.Root() root: CategoryCount, @TypeGraphQL.Args() args: CategoryCountProductsArgs): number {
    return root.products;
  }
}
