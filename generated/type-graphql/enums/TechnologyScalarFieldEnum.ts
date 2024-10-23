import * as TypeGraphQL from "type-graphql";

export enum TechnologyScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  goalId = "goalId"
}
TypeGraphQL.registerEnumType(TechnologyScalarFieldEnum, {
  name: "TechnologyScalarFieldEnum",
  description: undefined,
});
