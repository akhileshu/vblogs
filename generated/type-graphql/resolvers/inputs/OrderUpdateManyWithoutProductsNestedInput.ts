import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutProductsInput } from "../inputs/OrderCreateOrConnectWithoutProductsInput";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutProductsInput } from "../inputs/OrderUpdateManyWithWhereWithoutProductsInput";
import { OrderUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutProductsInput";
import { OrderUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutProductsNestedInput", {})
export class OrderUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutProductsInput], {
    nullable: true
  })
  create?: OrderCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
