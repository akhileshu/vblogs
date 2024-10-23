import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GoalScalarWhereWithAggregatesInput", {})
export class GoalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GoalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GoalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GoalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GoalScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;
}
