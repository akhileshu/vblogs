import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsAvgOrderByAggregateInput } from "../inputs/TagsOnBlogsAvgOrderByAggregateInput";
import { TagsOnBlogsCountOrderByAggregateInput } from "../inputs/TagsOnBlogsCountOrderByAggregateInput";
import { TagsOnBlogsMaxOrderByAggregateInput } from "../inputs/TagsOnBlogsMaxOrderByAggregateInput";
import { TagsOnBlogsMinOrderByAggregateInput } from "../inputs/TagsOnBlogsMinOrderByAggregateInput";
import { TagsOnBlogsSumOrderByAggregateInput } from "../inputs/TagsOnBlogsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagsOnBlogsOrderByWithAggregationInput", {})
export class TagsOnBlogsOrderByWithAggregationInput {
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
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  blogId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TagsOnBlogsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TagsOnBlogsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TagsOnBlogsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TagsOnBlogsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TagsOnBlogsSumOrderByAggregateInput | undefined;
}
