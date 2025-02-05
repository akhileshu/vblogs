import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagWhereInput } from "../inputs/TagWhereInput";
import { TagsOnBlogsListRelationFilter } from "../inputs/TagsOnBlogsListRelationFilter";
import { TopicNullableRelationFilter } from "../inputs/TopicNullableRelationFilter";

@TypeGraphQL.InputType("TagWhereUniqueInput", {})
export class TagWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  AND?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  OR?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  NOT?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  topicId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TopicNullableRelationFilter, {
    nullable: true
  })
  topic?: TopicNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsListRelationFilter, {
    nullable: true
  })
  blogs?: TagsOnBlogsListRelationFilter | undefined;
}
