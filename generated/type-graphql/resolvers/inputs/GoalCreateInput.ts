import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateNestedManyWithoutGoalInput } from "../inputs/TechnologyCreateNestedManyWithoutGoalInput";

@TypeGraphQL.InputType("GoalCreateInput", {})
export class GoalCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TechnologyCreateNestedManyWithoutGoalInput, {
    nullable: true
  })
  Technologies?: TechnologyCreateNestedManyWithoutGoalInput | undefined;
}