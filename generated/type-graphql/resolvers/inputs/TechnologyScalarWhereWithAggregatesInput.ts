import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TechnologyScalarWhereWithAggregatesInput", {})
export class TechnologyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TechnologyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TechnologyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TechnologyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TechnologyScalarWhereWithAggregatesInput[] | undefined;

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
  goalId?: StringNullableWithAggregatesFilter | undefined;
}
