import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderAvgOrderByAggregateInput } from "../inputs/OrderAvgOrderByAggregateInput";
import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
import { OrderSumOrderByAggregateInput } from "../inputs/OrderSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderOrderByWithAggregationInput", {})
export class OrderOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  userId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => OrderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrderAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrderMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrderSumOrderByAggregateInput | undefined;
}
