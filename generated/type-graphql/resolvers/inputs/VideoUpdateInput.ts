import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateOneRequiredWithoutVideoNestedInput } from "../inputs/BlogUpdateOneRequiredWithoutVideoNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoSectionUpdateManyWithoutVideoNestedInput } from "../inputs/VideoSectionUpdateManyWithoutVideoNestedInput";

@TypeGraphQL.InputType("VideoUpdateInput", {})
export class VideoUpdateInput {
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
  videoLink?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnailLink?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateOneRequiredWithoutVideoNestedInput, {
    nullable: true
  })
  blog?: BlogUpdateOneRequiredWithoutVideoNestedInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionUpdateManyWithoutVideoNestedInput, {
    nullable: true
  })
  sections?: VideoSectionUpdateManyWithoutVideoNestedInput | undefined;
}
