import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyUserInputEnvelope } from "../inputs/UserInterestCreateManyUserInputEnvelope";
import { UserInterestCreateOrConnectWithoutUserInput } from "../inputs/UserInterestCreateOrConnectWithoutUserInput";
import { UserInterestCreateWithoutUserInput } from "../inputs/UserInterestCreateWithoutUserInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestCreateNestedManyWithoutUserInput", {})
export class UserInterestCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserInterestCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserInterestCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserInterestCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  connect?: UserInterestWhereUniqueInput[] | undefined;
}
