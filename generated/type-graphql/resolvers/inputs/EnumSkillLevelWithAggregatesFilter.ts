import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSkillLevelFilter } from "../inputs/NestedEnumSkillLevelFilter";
import { NestedEnumSkillLevelWithAggregatesFilter } from "../inputs/NestedEnumSkillLevelWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.InputType("EnumSkillLevelWithAggregatesFilter", {})
export class EnumSkillLevelWithAggregatesFilter {
  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: true
  })
  equals?: "BASIC" | "INTERMEDIATE" | "ADVANCED" | undefined;

  @TypeGraphQL.Field(_type => [SkillLevel], {
    nullable: true
  })
  in?: Array<"BASIC" | "INTERMEDIATE" | "ADVANCED"> | undefined;

  @TypeGraphQL.Field(_type => [SkillLevel], {
    nullable: true
  })
  notIn?: Array<"BASIC" | "INTERMEDIATE" | "ADVANCED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSkillLevelWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSkillLevelWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSkillLevelFilter, {
    nullable: true
  })
  _min?: NestedEnumSkillLevelFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSkillLevelFilter, {
    nullable: true
  })
  _max?: NestedEnumSkillLevelFilter | undefined;
}
