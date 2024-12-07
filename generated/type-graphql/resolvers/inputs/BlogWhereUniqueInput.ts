import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentNullableRelationFilter } from "../inputs/BlogContentNullableRelationFilter";
import { BlogTopicIdTitleCompoundUniqueInput } from "../inputs/BlogTopicIdTitleCompoundUniqueInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSkillLevelFilter } from "../inputs/EnumSkillLevelFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagsOnBlogsListRelationFilter } from "../inputs/TagsOnBlogsListRelationFilter";
import { TopicNullableRelationFilter } from "../inputs/TopicNullableRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
import { VideoNullableRelationFilter } from "../inputs/VideoNullableRelationFilter";

@TypeGraphQL.InputType("BlogWhereUniqueInput", {})
export class BlogWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug?: string | undefined;

  @TypeGraphQL.Field(_type => BlogTopicIdTitleCompoundUniqueInput, {
    nullable: true
  })
  topicId_title?: BlogTopicIdTitleCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereInput], {
    nullable: true
  })
  AND?: BlogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereInput], {
    nullable: true
  })
  OR?: BlogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereInput], {
    nullable: true
  })
  NOT?: BlogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  topicId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  authorId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSkillLevelFilter, {
    nullable: true
  })
  skillLevel?: EnumSkillLevelFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  views?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  readTimeInMinutes?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TopicNullableRelationFilter, {
    nullable: true
  })
  topic?: TopicNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsListRelationFilter, {
    nullable: true
  })
  tags?: TagsOnBlogsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  author?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlogContentNullableRelationFilter, {
    nullable: true
  })
  content?: BlogContentNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VideoNullableRelationFilter, {
    nullable: true
  })
  Video?: VideoNullableRelationFilter | undefined;
}
