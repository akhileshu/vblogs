import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCreateOrConnectWithoutTechnologiesInput } from "../inputs/GoalCreateOrConnectWithoutTechnologiesInput";
import { GoalCreateWithoutTechnologiesInput } from "../inputs/GoalCreateWithoutTechnologiesInput";
import { GoalUpdateToOneWithWhereWithoutTechnologiesInput } from "../inputs/GoalUpdateToOneWithWhereWithoutTechnologiesInput";
import { GoalUpsertWithoutTechnologiesInput } from "../inputs/GoalUpsertWithoutTechnologiesInput";
import { GoalWhereInput } from "../inputs/GoalWhereInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateOneWithoutTechnologiesNestedInput", {})
export class GoalUpdateOneWithoutTechnologiesNestedInput {
  @TypeGraphQL.Field(_type => GoalCreateWithoutTechnologiesInput, {
    nullable: true
  })
  create?: GoalCreateWithoutTechnologiesInput | undefined;

  @TypeGraphQL.Field(_type => GoalCreateOrConnectWithoutTechnologiesInput, {
    nullable: true
  })
  connectOrCreate?: GoalCreateOrConnectWithoutTechnologiesInput | undefined;

  @TypeGraphQL.Field(_type => GoalUpsertWithoutTechnologiesInput, {
    nullable: true
  })
  upsert?: GoalUpsertWithoutTechnologiesInput | undefined;

  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  disconnect?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  delete?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: true
  })
  connect?: GoalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GoalUpdateToOneWithWhereWithoutTechnologiesInput, {
    nullable: true
  })
  update?: GoalUpdateToOneWithWhereWithoutTechnologiesInput | undefined;
}
