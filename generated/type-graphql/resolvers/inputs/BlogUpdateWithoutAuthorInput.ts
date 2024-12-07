import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentUpdateOneWithoutBlogNestedInput } from "../inputs/BlogContentUpdateOneWithoutBlogNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSkillLevelFieldUpdateOperationsInput } from "../inputs/EnumSkillLevelFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnBlogsUpdateManyWithoutBlogNestedInput } from "../inputs/TagsOnBlogsUpdateManyWithoutBlogNestedInput";
import { TopicUpdateOneWithoutBlogsNestedInput } from "../inputs/TopicUpdateOneWithoutBlogsNestedInput";
import { VideoUpdateOneWithoutBlogNestedInput } from "../inputs/VideoUpdateOneWithoutBlogNestedInput";

@TypeGraphQL.InputType("BlogUpdateWithoutAuthorInput", {})
export class BlogUpdateWithoutAuthorInput {
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

  @TypeGraphQL.Field(_type => EnumSkillLevelFieldUpdateOperationsInput, {
    nullable: true
  })
  skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  views?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  readTimeInMinutes?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateOneWithoutBlogsNestedInput, {
    nullable: true
  })
  topic?: TopicUpdateOneWithoutBlogsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateManyWithoutBlogNestedInput, {
    nullable: true
  })
  tags?: TagsOnBlogsUpdateManyWithoutBlogNestedInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentUpdateOneWithoutBlogNestedInput, {
    nullable: true
  })
  content?: BlogContentUpdateOneWithoutBlogNestedInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateOneWithoutBlogNestedInput, {
    nullable: true
  })
  Video?: VideoUpdateOneWithoutBlogNestedInput | undefined;
}
