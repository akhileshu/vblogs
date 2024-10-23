import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.InputType("NestedEnumSkillLevelFilter", {})
export class NestedEnumSkillLevelFilter {
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
