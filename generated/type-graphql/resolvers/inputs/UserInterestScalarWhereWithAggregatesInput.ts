import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumInterestTypeWithAggregatesFilter } from "../inputs/EnumInterestTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserInterestScalarWhereWithAggregatesInput", {})
export class UserInterestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserInterestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserInterestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserInterestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserInterestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  technologyId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  topicId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumInterestTypeWithAggregatesFilter, {
    nullable: true
  })
  interestType?: EnumInterestTypeWithAggregatesFilter | undefined;
}
