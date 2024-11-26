import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VideoScalarWhereWithAggregatesInput", {})
export class VideoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VideoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VideoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VideoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  blogId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  videoLink?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  thumbnailLink?: StringWithAggregatesFilter | undefined;
}
