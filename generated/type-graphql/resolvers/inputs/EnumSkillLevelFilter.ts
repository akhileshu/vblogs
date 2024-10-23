import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSkillLevelFilter } from "../inputs/NestedEnumSkillLevelFilter";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.InputType("EnumSkillLevelFilter", {})
export class EnumSkillLevelFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSkillLevelFilter, {
    nullable: true
  })
  not?: NestedEnumSkillLevelFilter | undefined;
}
