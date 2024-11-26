import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TagsOnBlogsScalarWhereWithAggregatesInput", {})
export class TagsOnBlogsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TagsOnBlogsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TagsOnBlogsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TagsOnBlogsScalarWhereWithAggregatesInput[] | undefined;

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
  tagId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  blogId?: StringWithAggregatesFilter | undefined;
}
