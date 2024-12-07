import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GoalNullableRelationFilter } from "../inputs/GoalNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";
import { TopicListRelationFilter } from "../inputs/TopicListRelationFilter";
import { UserInterestListRelationFilter } from "../inputs/UserInterestListRelationFilter";

@TypeGraphQL.InputType("TechnologyWhereUniqueInput", {})
export class TechnologyWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereInput], {
    nullable: true
  })
  AND?: TechnologyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereInput], {
    nullable: true
  })
  OR?: TechnologyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereInput], {
    nullable: true
  })
  NOT?: TechnologyWhereInput[] | undefined;

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
  goalId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TopicListRelationFilter, {
    nullable: true
  })
  topics?: TopicListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GoalNullableRelationFilter, {
    nullable: true
  })
  goal?: GoalNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserInterestListRelationFilter, {
    nullable: true
  })
  userInterests?: UserInterestListRelationFilter | undefined;
}
