import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BlogContentScalarWhereWithAggregatesInput", {})
export class BlogContentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BlogContentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BlogContentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogContentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BlogContentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogContentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BlogContentScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  intro?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  implementation?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  advanced?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  blogId?: StringWithAggregatesFilter | undefined;
}
