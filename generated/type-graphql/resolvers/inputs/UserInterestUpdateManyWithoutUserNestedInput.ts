import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyUserInputEnvelope } from "../inputs/UserInterestCreateManyUserInputEnvelope";
import { UserInterestCreateOrConnectWithoutUserInput } from "../inputs/UserInterestCreateOrConnectWithoutUserInput";
import { UserInterestCreateWithoutUserInput } from "../inputs/UserInterestCreateWithoutUserInput";
import { UserInterestScalarWhereInput } from "../inputs/UserInterestScalarWhereInput";
import { UserInterestUpdateManyWithWhereWithoutUserInput } from "../inputs/UserInterestUpdateManyWithWhereWithoutUserInput";
import { UserInterestUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserInterestUpdateWithWhereUniqueWithoutUserInput";
import { UserInterestUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserInterestUpsertWithWhereUniqueWithoutUserInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpdateManyWithoutUserNestedInput", {})
export class UserInterestUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserInterestCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserInterestCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserInterestUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserInterestCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  set?: UserInterestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserInterestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  delete?: UserInterestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestWhereUniqueInput], {
    nullable: true
  })
  connect?: UserInterestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserInterestUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserInterestUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserInterestScalarWhereInput[] | undefined;
}
