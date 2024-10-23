import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumInterestTypeFilter } from "../inputs/NestedEnumInterestTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.InputType("NestedEnumInterestTypeWithAggregatesFilter", {})
export class NestedEnumInterestTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => InterestType, {
    nullable: true
  })
  equals?: "TECHNOLOGY" | "TOPIC" | undefined;

  @TypeGraphQL.Field(_type => [InterestType], {
    nullable: true
  })
  in?: Array<"TECHNOLOGY" | "TOPIC"> | undefined;

  @TypeGraphQL.Field(_type => [InterestType], {
    nullable: true
  })
  notIn?: Array<"TECHNOLOGY" | "TOPIC"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumInterestTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumInterestTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumInterestTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumInterestTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumInterestTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumInterestTypeFilter | undefined;
}
