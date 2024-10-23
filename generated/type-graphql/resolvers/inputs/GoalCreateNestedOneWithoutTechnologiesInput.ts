import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCreateOrConnectWithoutTechnologiesInput } from "../inputs/GoalCreateOrConnectWithoutTechnologiesInput";
import { GoalCreateWithoutTechnologiesInput } from "../inputs/GoalCreateWithoutTechnologiesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateNestedOneWithoutTechnologiesInput", {})
export class GoalCreateNestedOneWithoutTechnologiesInput {
  @TypeGraphQL.Field(_type => GoalCreateWithoutTechnologiesInput, {
    nullable: true
  })
  create?: GoalCreateWithoutTechnologiesInput | undefined;

  @TypeGraphQL.Field(_type => GoalCreateOrConnectWithoutTechnologiesInput, {
    nullable: true
  })
  connectOrCreate?: GoalCreateOrConnectWithoutTechnologiesInput | undefined;

  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: true
  })
  connect?: GoalWhereUniqueInput | undefined;
}
