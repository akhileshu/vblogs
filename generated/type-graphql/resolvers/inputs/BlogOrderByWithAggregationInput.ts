import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogAvgOrderByAggregateInput } from "../inputs/BlogAvgOrderByAggregateInput";
import { BlogCountOrderByAggregateInput } from "../inputs/BlogCountOrderByAggregateInput";
import { BlogMaxOrderByAggregateInput } from "../inputs/BlogMaxOrderByAggregateInput";
import { BlogMinOrderByAggregateInput } from "../inputs/BlogMinOrderByAggregateInput";
import { BlogSumOrderByAggregateInput } from "../inputs/BlogSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlogOrderByWithAggregationInput", {})
export class BlogOrderByWithAggregationInput {
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
  topicId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  skillLevel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  authorId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  views?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  readTimeInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BlogCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BlogCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BlogAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BlogMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BlogMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BlogSumOrderByAggregateInput | undefined;
}
