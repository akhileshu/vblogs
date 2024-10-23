import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

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
  tagId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  blogId?: IntWithAggregatesFilter | undefined;
}
