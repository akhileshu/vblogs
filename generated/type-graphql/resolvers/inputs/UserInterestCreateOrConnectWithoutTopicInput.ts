import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateWithoutTopicInput } from "../inputs/UserInterestCreateWithoutTopicInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestCreateOrConnectWithoutTopicInput", {})
export class UserInterestCreateOrConnectWithoutTopicInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestCreateWithoutTopicInput, {
    nullable: false
  })
  create!: UserInterestCreateWithoutTopicInput;
}
