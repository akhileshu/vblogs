import * as TypeGraphQL from "type-graphql";

export enum TopicScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  technologyId = "technologyId"
}
TypeGraphQL.registerEnumType(TopicScalarFieldEnum, {
  name: "TopicScalarFieldEnum",
  description: undefined,
});
