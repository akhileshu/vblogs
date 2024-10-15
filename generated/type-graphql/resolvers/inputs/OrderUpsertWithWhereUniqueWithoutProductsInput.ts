import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderUpdateWithoutProductsInput } from "../inputs/OrderUpdateWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutProductsInput", {})
export class OrderUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutProductsInput, {
    nullable: false
  })
  create!: OrderCreateWithoutProductsInput;
}
