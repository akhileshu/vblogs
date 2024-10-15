import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateWithoutCategoriesInput } from "../inputs/ProductUpdateWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutCategoriesInput", {})
export class ProductUpsertWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCategoriesInput;
}
