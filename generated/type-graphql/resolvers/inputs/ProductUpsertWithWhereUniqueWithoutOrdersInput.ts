import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateWithoutOrdersInput } from "../inputs/ProductUpdateWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutOrdersInput", {})
export class ProductUpsertWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOrdersInput;
}
