import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumInterestTypeFilter } from "../inputs/EnumInterestTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

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
}
