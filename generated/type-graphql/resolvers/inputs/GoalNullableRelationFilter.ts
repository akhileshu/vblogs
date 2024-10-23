import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalWhereInput } from "../inputs/GoalWhereInput";

@TypeGraphQL.InputType("GoalNullableRelationFilter", {})
export class GoalNullableRelationFilter {
  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  is?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  isNot?: GoalWhereInput | undefined;
}
