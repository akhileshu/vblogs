import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentAvgOrderByAggregateInput } from "../inputs/BlogContentAvgOrderByAggregateInput";
import { BlogContentCountOrderByAggregateInput } from "../inputs/BlogContentCountOrderByAggregateInput";
import { BlogContentMaxOrderByAggregateInput } from "../inputs/BlogContentMaxOrderByAggregateInput";
import { BlogContentMinOrderByAggregateInput } from "../inputs/BlogContentMinOrderByAggregateInput";
import { BlogContentSumOrderByAggregateInput } from "../inputs/BlogContentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlogContentOrderByWithAggregationInput", {})
export class BlogContentOrderByWithAggregationInput {
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
  intro?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  implementation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  advanced?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  blogId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BlogContentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BlogContentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BlogContentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BlogContentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BlogContentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BlogContentSumOrderByAggregateInput | undefined;
}
