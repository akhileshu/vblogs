import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentOrderByWithRelationInput } from "../inputs/BlogContentOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TagsOnBlogsOrderByRelationAggregateInput } from "../inputs/TagsOnBlogsOrderByRelationAggregateInput";
import { TopicOrderByWithRelationInput } from "../inputs/TopicOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VideoOrderByWithRelationInput } from "../inputs/VideoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlogOrderByWithRelationInput", {})
export class BlogOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  authorId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  skillLevel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  slug?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  views?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  readTimeInMinutes?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => TopicOrderByWithRelationInput, {
    nullable: true
  })
  topic?: TopicOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsOrderByRelationAggregateInput, {
    nullable: true
  })
  tags?: TagsOnBlogsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  author?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentOrderByWithRelationInput, {
    nullable: true
  })
  content?: BlogContentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VideoOrderByWithRelationInput, {
    nullable: true
  })
  Video?: VideoOrderByWithRelationInput | undefined;
}
