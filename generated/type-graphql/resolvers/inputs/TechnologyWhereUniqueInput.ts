import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GoalNullableRelationFilter } from "../inputs/GoalNullableRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";
import { TopicListRelationFilter } from "../inputs/TopicListRelationFilter";
import { UserInterestListRelationFilter } from "../inputs/UserInterestListRelationFilter";

@TypeGraphQL.InputType("TechnologyWhereUniqueInput", {})
export class TechnologyWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  goalId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TopicListRelationFilter, {
    nullable: true
  })
  Topics?: TopicListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GoalNullableRelationFilter, {
    nullable: true
  })
  Goal?: GoalNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserInterestListRelationFilter, {
    nullable: true
  })
  userInterests?: UserInterestListRelationFilter | undefined;
}
