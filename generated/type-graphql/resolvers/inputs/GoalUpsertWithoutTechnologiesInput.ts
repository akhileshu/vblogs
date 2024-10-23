import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCreateWithoutTechnologiesInput } from "../inputs/GoalCreateWithoutTechnologiesInput";
import { GoalUpdateWithoutTechnologiesInput } from "../inputs/GoalUpdateWithoutTechnologiesInput";
import { GoalWhereInput } from "../inputs/GoalWhereInput";

@TypeGraphQL.InputType("GoalUpsertWithoutTechnologiesInput", {})
export class GoalUpsertWithoutTechnologiesInput {
  @TypeGraphQL.Field(_type => GoalUpdateWithoutTechnologiesInput, {
    nullable: false
  })
  update!: GoalUpdateWithoutTechnologiesInput;

  @TypeGraphQL.Field(_type => GoalCreateWithoutTechnologiesInput, {
    nullable: false
  })
  create!: GoalCreateWithoutTechnologiesInput;

  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  where?: GoalWhereInput | undefined;
}
