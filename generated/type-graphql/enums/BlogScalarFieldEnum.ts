import * as TypeGraphQL from "type-graphql";

export enum BlogScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  topicId = "topicId",
  authorId = "authorId",
  title = "title",
  skillLevel = "skillLevel",
  description = "description",
  slug = "slug",
  views = "views",
  readTimeInMinutes = "readTimeInMinutes"
}
TypeGraphQL.registerEnumType(BlogScalarFieldEnum, {
  name: "BlogScalarFieldEnum",
  description: undefined,
});
