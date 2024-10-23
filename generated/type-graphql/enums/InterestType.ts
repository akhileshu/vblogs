import * as TypeGraphQL from "type-graphql";

export enum InterestType {
  TECHNOLOGY = "TECHNOLOGY",
  TOPIC = "TOPIC"
}
TypeGraphQL.registerEnumType(InterestType, {
  name: "InterestType",
  description: undefined,
});
