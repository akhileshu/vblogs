import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBlogPartFieldUpdateOperationsInput } from "../inputs/EnumBlogPartFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoUpdateOneRequiredWithoutSectionsNestedInput } from "../inputs/VideoUpdateOneRequiredWithoutSectionsNestedInput";

@TypeGraphQL.InputType("VideoSectionUpdateInput", {})
export class VideoSectionUpdateInput {
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
  blogSectionTitle?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  timestampInSeconds?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBlogPartFieldUpdateOperationsInput, {
    nullable: true
  })
  blogPart?: EnumBlogPartFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateOneRequiredWithoutSectionsNestedInput, {
    nullable: true
  })
  Video?: VideoUpdateOneRequiredWithoutSectionsNestedInput | undefined;
}
