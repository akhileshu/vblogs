import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentNullableRelationFilter } from "../inputs/BlogContentNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSkillLevelFilter } from "../inputs/EnumSkillLevelFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagsOnBlogsListRelationFilter } from "../inputs/TagsOnBlogsListRelationFilter";
import { TopicNullableRelationFilter } from "../inputs/TopicNullableRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
import { VideoNullableRelationFilter } from "../inputs/VideoNullableRelationFilter";

@TypeGraphQL.InputType("BlogWhereInput", {})
export class BlogWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  topicId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSkillLevelFilter, {
    nullable: true
  })
  skillLevel?: EnumSkillLevelFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  authorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  views?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  readTimeInMinutes?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TopicNullableRelationFilter, {
    nullable: true
  })
  Topic?: TopicNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsListRelationFilter, {
    nullable: true
  })
  Tags?: TagsOnBlogsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  Author?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlogContentNullableRelationFilter, {
    nullable: true
  })
  content?: BlogContentNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VideoNullableRelationFilter, {
    nullable: true
  })
  Video?: VideoNullableRelationFilter | undefined;
}
