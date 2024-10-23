import * as TypeGraphQL from "type-graphql";

export enum SkillLevel {
  BASIC = "BASIC",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED"
}
TypeGraphQL.registerEnumType(SkillLevel, {
  name: "SkillLevel",
  description: undefined,
});
