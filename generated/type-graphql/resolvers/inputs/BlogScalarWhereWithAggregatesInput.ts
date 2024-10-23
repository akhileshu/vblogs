import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSkillLevelWithAggregatesFilter } from "../inputs/EnumSkillLevelWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BlogScalarWhereWithAggregatesInput", {})
export class BlogScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BlogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BlogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BlogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BlogScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  topicId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSkillLevelWithAggregatesFilter, {
    nullable: true
  })
  skillLevel?: EnumSkillLevelWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  authorId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  views?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  readTimeInMinutes?: IntWithAggregatesFilter | undefined;
}
