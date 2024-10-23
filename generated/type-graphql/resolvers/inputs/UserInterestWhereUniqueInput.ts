import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumInterestTypeFilter } from "../inputs/EnumInterestTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { TechnologyNullableRelationFilter } from "../inputs/TechnologyNullableRelationFilter";
import { TopicNullableRelationFilter } from "../inputs/TopicNullableRelationFilter";
import { UserInterestWhereInput } from "../inputs/UserInterestWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserInterestWhereUniqueInput", {})
export class UserInterestWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  technologyId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  topicId?: IntNullableFilter | undefined;

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
