import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyTopicInputEnvelope } from "../inputs/UserInterestCreateManyTopicInputEnvelope";
import { UserInterestCreateOrConnectWithoutTopicInput } from "../inputs/UserInterestCreateOrConnectWithoutTopicInput";
import { UserInterestCreateWithoutTopicInput } from "../inputs/UserInterestCreateWithoutTopicInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestCreateNestedManyWithoutTopicInput", {})
export class UserInterestCreateNestedManyWithoutTopicInput {
  @TypeGraphQL.Field(_type => [UserInterestCreateWithoutTopicInput], {
    nullable: true
  })
  create?: UserInterestCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: UserInterestCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: UserInterestCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  connect?: UserInterestWhereUniqueInput[] | undefined;
}
