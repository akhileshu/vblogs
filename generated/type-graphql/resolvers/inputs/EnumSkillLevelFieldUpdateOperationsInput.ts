import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.InputType("EnumSkillLevelFieldUpdateOperationsInput", {})
export class EnumSkillLevelFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: true
  })
  set?: "BASIC" | "INTERMEDIATE" | "ADVANCED" | undefined;
}
