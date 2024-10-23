import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalAvgOrderByAggregateInput } from "../inputs/GoalAvgOrderByAggregateInput";
import { GoalCountOrderByAggregateInput } from "../inputs/GoalCountOrderByAggregateInput";
import { GoalMaxOrderByAggregateInput } from "../inputs/GoalMaxOrderByAggregateInput";
import { GoalMinOrderByAggregateInput } from "../inputs/GoalMinOrderByAggregateInput";
import { GoalSumOrderByAggregateInput } from "../inputs/GoalSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GoalOrderByWithAggregationInput", {})
export class GoalOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GoalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GoalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GoalAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GoalAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GoalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GoalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GoalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GoalMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GoalSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GoalSumOrderByAggregateInput | undefined;
}
