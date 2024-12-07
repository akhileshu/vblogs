import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCreateNestedOneWithoutTechnologiesInput } from "../inputs/GoalCreateNestedOneWithoutTechnologiesInput";
import { UserInterestCreateNestedManyWithoutTechnologyInput } from "../inputs/UserInterestCreateNestedManyWithoutTechnologyInput";

@TypeGraphQL.InputType("TechnologyCreateWithoutTopicsInput", {})
export class TechnologyCreateWithoutTopicsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => GoalCreateNestedOneWithoutTechnologiesInput, {
    nullable: true
  })
  goal?: GoalCreateNestedOneWithoutTechnologiesInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateNestedManyWithoutTechnologyInput, {
    nullable: true
  })
  userInterests?: UserInterestCreateNestedManyWithoutTechnologyInput | undefined;
}
