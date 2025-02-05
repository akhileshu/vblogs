import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateManyWithoutTopicNestedInput } from "../inputs/BlogUpdateManyWithoutTopicNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutTopicNestedInput } from "../inputs/TagUpdateManyWithoutTopicNestedInput";
import { TechnologyUpdateOneWithoutTopicsNestedInput } from "../inputs/TechnologyUpdateOneWithoutTopicsNestedInput";
import { UserInterestUpdateManyWithoutTopicNestedInput } from "../inputs/UserInterestUpdateManyWithoutTopicNestedInput";

@TypeGraphQL.InputType("TopicUpdateInput", {})
export class TopicUpdateInput {
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

  @TypeGraphQL.Field(_type => TechnologyUpdateOneWithoutTopicsNestedInput, {
    nullable: true
  })
  technology?: TechnologyUpdateOneWithoutTopicsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateManyWithoutTopicNestedInput, {
    nullable: true
  })
  blogs?: BlogUpdateManyWithoutTopicNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutTopicNestedInput, {
    nullable: true
  })
  tags?: TagUpdateManyWithoutTopicNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestUpdateManyWithoutTopicNestedInput, {
    nullable: true
  })
  userInterests?: UserInterestUpdateManyWithoutTopicNestedInput | undefined;
}
