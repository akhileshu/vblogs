import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateWithoutTechnologyInput } from "../inputs/UserInterestCreateWithoutTechnologyInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestCreateOrConnectWithoutTechnologyInput", {})
export class UserInterestCreateOrConnectWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestCreateWithoutTechnologyInput, {
    nullable: false
  })
  create!: UserInterestCreateWithoutTechnologyInput;
}
