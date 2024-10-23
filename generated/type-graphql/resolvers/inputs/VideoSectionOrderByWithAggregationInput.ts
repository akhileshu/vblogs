import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionAvgOrderByAggregateInput } from "../inputs/VideoSectionAvgOrderByAggregateInput";
import { VideoSectionCountOrderByAggregateInput } from "../inputs/VideoSectionCountOrderByAggregateInput";
import { VideoSectionMaxOrderByAggregateInput } from "../inputs/VideoSectionMaxOrderByAggregateInput";
import { VideoSectionMinOrderByAggregateInput } from "../inputs/VideoSectionMinOrderByAggregateInput";
import { VideoSectionSumOrderByAggregateInput } from "../inputs/VideoSectionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VideoSectionOrderByWithAggregationInput", {})
export class VideoSectionOrderByWithAggregationInput {
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
  videoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  blogSectionTitle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestampInSeconds?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  blogPart?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VideoSectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VideoSectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VideoSectionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VideoSectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VideoSectionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VideoSectionSumOrderByAggregateInput | undefined;
}
