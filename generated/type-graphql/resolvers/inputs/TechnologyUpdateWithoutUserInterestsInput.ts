import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GoalUpdateOneWithoutTechnologiesNestedInput } from "../inputs/GoalUpdateOneWithoutTechnologiesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateManyWithoutTechnologyNestedInput } from "../inputs/TopicUpdateManyWithoutTechnologyNestedInput";

@TypeGraphQL.InputType("TechnologyUpdateWithoutUserInterestsInput", {})
export class TechnologyUpdateWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateManyWithoutTechnologyNestedInput, {
    nullable: true
  })
  topics?: TopicUpdateManyWithoutTechnologyNestedInput | undefined;

  @TypeGraphQL.Field(_type => GoalUpdateOneWithoutTechnologiesNestedInput, {
    nullable: true
  })
  goal?: GoalUpdateOneWithoutTechnologiesNestedInput | undefined;
}
