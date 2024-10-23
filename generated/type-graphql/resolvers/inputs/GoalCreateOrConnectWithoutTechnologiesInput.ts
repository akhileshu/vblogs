import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCreateWithoutTechnologiesInput } from "../inputs/GoalCreateWithoutTechnologiesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutTechnologiesInput", {})
export class GoalCreateOrConnectWithoutTechnologiesInput {
  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: false
  })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(_type => GoalCreateWithoutTechnologiesInput, {
    nullable: false
  })
  create!: GoalCreateWithoutTechnologiesInput;
}
