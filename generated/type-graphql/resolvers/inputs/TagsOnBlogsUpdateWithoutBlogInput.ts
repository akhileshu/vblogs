import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutBlogsNestedInput } from "../inputs/TagUpdateOneRequiredWithoutBlogsNestedInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateWithoutBlogInput", {})
export class TagsOnBlogsUpdateWithoutBlogInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutBlogsNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutBlogsNestedInput | undefined;
}
