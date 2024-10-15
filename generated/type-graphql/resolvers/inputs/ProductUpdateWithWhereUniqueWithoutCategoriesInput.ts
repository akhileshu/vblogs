import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutCategoriesInput } from "../inputs/ProductUpdateWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutCategoriesInput", {})
export class ProductUpdateWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutCategoriesInput;
}
