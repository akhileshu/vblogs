import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateWithoutUserInput } from "../inputs/UserInterestCreateWithoutUserInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestCreateOrConnectWithoutUserInput", {})
export class UserInterestCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserInterestCreateWithoutUserInput;
}
