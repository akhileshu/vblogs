import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnBlogsUpdateManyWithoutTagNestedInput } from "../inputs/TagsOnBlogsUpdateManyWithoutTagNestedInput";

@TypeGraphQL.InputType("TagUpdateWithoutTopicInput", {})
export class TagUpdateWithoutTopicInput {
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

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  Blogs?: TagsOnBlogsUpdateManyWithoutTagNestedInput | undefined;
}
