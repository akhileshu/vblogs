import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderWhereInput } from "../inputs/OrderWhereInput";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

@TypeGraphQL.InputType("OrderWhereUniqueInput", {})
export class OrderWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  AND?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  OR?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  NOT?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  customer?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  products?: ProductListRelationFilter | undefined;
}
