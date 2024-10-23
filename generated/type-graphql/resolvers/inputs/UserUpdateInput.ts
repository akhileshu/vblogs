import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateManyWithoutAuthorNestedInput } from "../inputs/BlogUpdateManyWithoutAuthorNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserInterestUpdateManyWithoutUserNestedInput } from "../inputs/UserInterestUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateInput", {})
export class UserUpdateInput {
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
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  emailId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  Blogs?: BlogUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  interests?: UserInterestUpdateManyWithoutUserNestedInput | undefined;
}
