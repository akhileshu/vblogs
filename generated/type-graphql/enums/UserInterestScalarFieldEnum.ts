import * as TypeGraphQL from "type-graphql";

export enum UserInterestScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
  technologyId = "technologyId",
  topicId = "topicId",
  interestType = "interestType"
}
TypeGraphQL.registerEnumType(UserInterestScalarFieldEnum, {
  name: "UserInterestScalarFieldEnum",
  description: undefined,
});
