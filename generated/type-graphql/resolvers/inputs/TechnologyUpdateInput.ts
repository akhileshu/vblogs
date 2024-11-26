import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GoalUpdateOneWithoutTechnologiesNestedInput } from "../inputs/GoalUpdateOneWithoutTechnologiesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateManyWithoutTechnologyNestedInput } from "../inputs/TopicUpdateManyWithoutTechnologyNestedInput";
import { UserInterestUpdateManyWithoutTechnologyNestedInput } from "../inputs/UserInterestUpdateManyWithoutTechnologyNestedInput";

@TypeGraphQL.InputType("TechnologyUpdateInput", {})
export class TechnologyUpdateInput {
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
  Topics?: TopicUpdateManyWithoutTechnologyNestedInput | undefined;

  @TypeGraphQL.Field(_type => GoalUpdateOneWithoutTechnologiesNestedInput, {
    nullable: true
  })
  Goal?: GoalUpdateOneWithoutTechnologiesNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestUpdateManyWithoutTechnologyNestedInput, {
    nullable: true
  })
  userInterests?: UserInterestUpdateManyWithoutTechnologyNestedInput | undefined;
}
