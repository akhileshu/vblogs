import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  LEARNER = "LEARNER",
  AUTHOR = "AUTHOR",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
