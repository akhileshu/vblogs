import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBlogPartWithAggregatesFilter } from "../inputs/EnumBlogPartWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VideoSectionScalarWhereWithAggregatesInput", {})
export class VideoSectionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VideoSectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VideoSectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VideoSectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  videoId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  blogSectionTitle?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  timestampInSeconds?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBlogPartWithAggregatesFilter, {
    nullable: true
  })
  blogPart?: EnumBlogPartWithAggregatesFilter | undefined;
}
