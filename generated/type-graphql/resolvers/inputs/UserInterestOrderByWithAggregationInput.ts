import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserInterestAvgOrderByAggregateInput } from "../inputs/UserInterestAvgOrderByAggregateInput";
import { UserInterestCountOrderByAggregateInput } from "../inputs/UserInterestCountOrderByAggregateInput";
import { UserInterestMaxOrderByAggregateInput } from "../inputs/UserInterestMaxOrderByAggregateInput";
import { UserInterestMinOrderByAggregateInput } from "../inputs/UserInterestMinOrderByAggregateInput";
import { UserInterestSumOrderByAggregateInput } from "../inputs/UserInterestSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserInterestOrderByWithAggregationInput", {})
export class UserInterestOrderByWithAggregationInput {
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
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  technologyId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  topicId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  interestType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserInterestCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserInterestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserInterestAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserInterestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserInterestMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserInterestSumOrderByAggregateInput | undefined;
}
