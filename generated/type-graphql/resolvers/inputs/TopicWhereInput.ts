import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogListRelationFilter } from "../inputs/BlogListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";
import { TechnologyNullableRelationFilter } from "../inputs/TechnologyNullableRelationFilter";
import { UserInterestListRelationFilter } from "../inputs/UserInterestListRelationFilter";

@TypeGraphQL.InputType("TopicWhereInput", {})
export class TopicWhereInput {
  @TypeGraphQL.Field(_type => [TopicWhereInput], {
    nullable: true
  })
  AND?: TopicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereInput], {
    nullable: true
  })
  OR?: TopicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereInput], {
    nullable: true
  })
  NOT?: TopicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
  technologyId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TechnologyNullableRelationFilter, {
    nullable: true
  })
  Technology?: TechnologyNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlogListRelationFilter, {
    nullable: true
  })
  Blogs?: BlogListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagListRelationFilter, {
    nullable: true
  })
  tags?: TagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserInterestListRelationFilter, {
    nullable: true
  })
  userInterests?: UserInterestListRelationFilter | undefined;
}
