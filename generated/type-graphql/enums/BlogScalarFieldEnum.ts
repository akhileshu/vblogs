import * as TypeGraphQL from "type-graphql";

export enum BlogScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  topicId = "topicId",
  skillLevel = "skillLevel",
  authorId = "authorId",
  description = "description",
  title = "title",
  slug = "slug",
  views = "views",
  readTimeInMinutes = "readTimeInMinutes"
}
TypeGraphQL.registerEnumType(BlogScalarFieldEnum, {
  name: "BlogScalarFieldEnum",
  description: undefined,
});
