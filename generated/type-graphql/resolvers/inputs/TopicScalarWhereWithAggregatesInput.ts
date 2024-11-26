import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TopicScalarWhereWithAggregatesInput", {})
export class TopicScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TopicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TopicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TopicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TopicScalarWhereWithAggregatesInput[] | undefined;

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
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  technologyId?: StringNullableWithAggregatesFilter | undefined;
}
