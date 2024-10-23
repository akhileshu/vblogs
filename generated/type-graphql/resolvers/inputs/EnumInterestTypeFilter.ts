import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumInterestTypeFilter } from "../inputs/NestedEnumInterestTypeFilter";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.InputType("EnumInterestTypeFilter", {})
export class EnumInterestTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumInterestTypeFilter, {
    nullable: true
  })
  not?: NestedEnumInterestTypeFilter | undefined;
}
