import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalUpdateWithoutTechnologiesInput } from "../inputs/GoalUpdateWithoutTechnologiesInput";
import { GoalWhereInput } from "../inputs/GoalWhereInput";

@TypeGraphQL.InputType("GoalUpdateToOneWithWhereWithoutTechnologiesInput", {})
export class GoalUpdateToOneWithWhereWithoutTechnologiesInput {
  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  where?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(_type => GoalUpdateWithoutTechnologiesInput, {
    nullable: false
  })
  data!: GoalUpdateWithoutTechnologiesInput;
}
