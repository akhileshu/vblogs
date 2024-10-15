import * as TypeGraphQL from "type-graphql";

export enum OrderScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
  name: "OrderScalarFieldEnum",
  description: undefined,
});
