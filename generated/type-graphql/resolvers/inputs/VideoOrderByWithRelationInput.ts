import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogOrderByWithRelationInput } from "../inputs/BlogOrderByWithRelationInput";
import { VideoSectionOrderByRelationAggregateInput } from "../inputs/VideoSectionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VideoOrderByWithRelationInput", {})
export class VideoOrderByWithRelationInput {
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
  blogId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  videoLink?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnailLink?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BlogOrderByWithRelationInput, {
    nullable: true
  })
  blog?: BlogOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionOrderByRelationAggregateInput, {
    nullable: true
  })
  sections?: VideoSectionOrderByRelationAggregateInput | undefined;
}
