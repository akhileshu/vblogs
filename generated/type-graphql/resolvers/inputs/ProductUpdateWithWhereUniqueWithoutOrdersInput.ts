import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutOrdersInput } from "../inputs/ProductUpdateWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutOrdersInput", {})
export class ProductUpdateWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutOrdersInput;
}
