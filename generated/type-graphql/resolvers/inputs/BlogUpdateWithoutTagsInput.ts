import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentUpdateOneWithoutBlogNestedInput } from "../inputs/BlogContentUpdateOneWithoutBlogNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSkillLevelFieldUpdateOperationsInput } from "../inputs/EnumSkillLevelFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateOneWithoutBlogsNestedInput } from "../inputs/TopicUpdateOneWithoutBlogsNestedInput";
import { UserUpdateOneWithoutBlogsNestedInput } from "../inputs/UserUpdateOneWithoutBlogsNestedInput";
import { VideoUpdateOneWithoutBlogNestedInput } from "../inputs/VideoUpdateOneWithoutBlogNestedInput";

@TypeGraphQL.InputType("BlogUpdateWithoutTagsInput", {})
export class BlogUpdateWithoutTagsInput {
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

  @TypeGraphQL.Field(_type => EnumSkillLevelFieldUpdateOperationsInput, {
    nullable: true
  })
  skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  views?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  readTimeInMinutes?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateOneWithoutBlogsNestedInput, {
    nullable: true
  })
  Topic?: TopicUpdateOneWithoutBlogsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutBlogsNestedInput, {
    nullable: true
  })
  Author?: UserUpdateOneWithoutBlogsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentUpdateOneWithoutBlogNestedInput, {
    nullable: true
  })
  content?: BlogContentUpdateOneWithoutBlogNestedInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateOneWithoutBlogNestedInput, {
    nullable: true
  })
  Video?: VideoUpdateOneWithoutBlogNestedInput | undefined;
}
