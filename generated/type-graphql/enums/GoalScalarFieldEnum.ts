import * as TypeGraphQL from "type-graphql";

export enum GoalScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title"
}
TypeGraphQL.registerEnumType(GoalScalarFieldEnum, {
  name: "GoalScalarFieldEnum",
  description: undefined,
});
