import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("NestedEnumUserRoleWithAggregatesFilter", {})
export class NestedEnumUserRoleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  equals?: "LEARNER" | "AUTHOR" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  in?: Array<"LEARNER" | "AUTHOR" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  notIn?: Array<"LEARNER" | "AUTHOR" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumUserRoleFilter | undefined;
}
