import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumInterestTypeWithAggregatesFilter } from "../inputs/EnumInterestTypeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  technologyId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  topicId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumInterestTypeWithAggregatesFilter, {
    nullable: true
  })
  interestType?: EnumInterestTypeWithAggregatesFilter | undefined;
}
