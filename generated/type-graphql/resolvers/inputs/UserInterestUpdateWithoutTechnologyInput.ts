import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumInterestTypeFieldUpdateOperationsInput } from "../inputs/EnumInterestTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateOneWithoutUserInterestsNestedInput } from "../inputs/TopicUpdateOneWithoutUserInterestsNestedInput";
import { UserUpdateOneRequiredWithoutInterestsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutInterestsNestedInput";

@TypeGraphQL.InputType("UserInterestUpdateWithoutTechnologyInput", {})
export class UserInterestUpdateWithoutTechnologyInput {
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

  @TypeGraphQL.Field(_type => EnumInterestTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  interestType?: EnumInterestTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutInterestsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutInterestsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateOneWithoutUserInterestsNestedInput, {
    nullable: true
  })
  topic?: TopicUpdateOneWithoutUserInterestsNestedInput | undefined;
}
