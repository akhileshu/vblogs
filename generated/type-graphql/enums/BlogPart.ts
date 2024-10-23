import * as TypeGraphQL from "type-graphql";

export enum BlogPart {
  INTRO = "INTRO",
  IMPLEMENTATION = "IMPLEMENTATION",
  ADVANCED = "ADVANCED"
}
TypeGraphQL.registerEnumType(BlogPart, {
  name: "BlogPart",
  description: undefined,
});
