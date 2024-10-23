import * as TypeGraphQL from "type-graphql";

export enum BlogContentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  intro = "intro",
  implementation = "implementation",
  advanced = "advanced",
  blogId = "blogId"
}
TypeGraphQL.registerEnumType(BlogContentScalarFieldEnum, {
  name: "BlogContentScalarFieldEnum",
  description: undefined,
});
