import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumInterestTypeFilter } from "../inputs/EnumInterestTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserInterestScalarWhereInput", {})
export class UserInterestScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserInterestScalarWhereInput], {
    nullable: true
  })
  AND?: UserInterestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereInput], {
    nullable: true
  })
  OR?: UserInterestScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereInput], {
    nullable: true
  })
  NOT?: UserInterestScalarWhereInput[] | undefined;

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
}
