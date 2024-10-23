import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateOneRequiredWithoutTagsNestedInput } from "../inputs/BlogUpdateOneRequiredWithoutTagsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateWithoutTagInput", {})
export class TagsOnBlogsUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateOneRequiredWithoutTagsNestedInput, {
    nullable: true
  })
  Blog?: BlogUpdateOneRequiredWithoutTagsNestedInput | undefined;
}
