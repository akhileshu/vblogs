import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutProductsInput } from "../inputs/OrderCreateOrConnectWithoutProductsInput";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutProductsInput", {})
export class OrderCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutProductsInput], {
    nullable: true
  })
  create?: OrderCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
