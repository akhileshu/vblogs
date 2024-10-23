import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyTechnologyInputEnvelope } from "../inputs/UserInterestCreateManyTechnologyInputEnvelope";
import { UserInterestCreateOrConnectWithoutTechnologyInput } from "../inputs/UserInterestCreateOrConnectWithoutTechnologyInput";
import { UserInterestCreateWithoutTechnologyInput } from "../inputs/UserInterestCreateWithoutTechnologyInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestCreateNestedManyWithoutTechnologyInput", {})
export class UserInterestCreateNestedManyWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => [UserInterestCreateWithoutTechnologyInput], {
    nullable: true
  })
  create?: UserInterestCreateWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestCreateOrConnectWithoutTechnologyInput], {
    nullable: true
  })
  connectOrCreate?: UserInterestCreateOrConnectWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateManyTechnologyInputEnvelope, {
    nullable: true
  })
  createMany?: UserInterestCreateManyTechnologyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  connect?: UserInterestWhereUniqueInput[] | undefined;
}
