import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumInterestTypeFilter } from "../inputs/EnumInterestTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TechnologyNullableRelationFilter } from "../inputs/TechnologyNullableRelationFilter";
import { TopicNullableRelationFilter } from "../inputs/TopicNullableRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserInterestWhereInput", {})
export class UserInterestWhereInput {
  @TypeGraphQL.Field(_type => [UserInterestWhereInput], {
    nullable: true
  })
  AND?: UserInterestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereInput], {
    nullable: true
  })
  OR?: UserInterestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereInput], {
    nullable: true
  })
  NOT?: UserInterestWhereInput[] | undefined;

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
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  technologyId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  topicId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumInterestTypeFilter, {
    nullable: true
  })
  interestType?: EnumInterestTypeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TechnologyNullableRelationFilter, {
    nullable: true
  })
  Technology?: TechnologyNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TopicNullableRelationFilter, {
    nullable: true
  })
  Topic?: TopicNullableRelationFilter | undefined;
}
