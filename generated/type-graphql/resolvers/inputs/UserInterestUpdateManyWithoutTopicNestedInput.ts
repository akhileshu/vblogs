import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyTopicInputEnvelope } from "../inputs/UserInterestCreateManyTopicInputEnvelope";
import { UserInterestCreateOrConnectWithoutTopicInput } from "../inputs/UserInterestCreateOrConnectWithoutTopicInput";
import { UserInterestCreateWithoutTopicInput } from "../inputs/UserInterestCreateWithoutTopicInput";
import { UserInterestScalarWhereInput } from "../inputs/UserInterestScalarWhereInput";
import { UserInterestUpdateManyWithWhereWithoutTopicInput } from "../inputs/UserInterestUpdateManyWithWhereWithoutTopicInput";
import { UserInterestUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/UserInterestUpdateWithWhereUniqueWithoutTopicInput";
import { UserInterestUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/UserInterestUpsertWithWhereUniqueWithoutTopicInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpdateManyWithoutTopicNestedInput", {})
export class UserInterestUpdateManyWithoutTopicNestedInput {
  @TypeGraphQL.Field(_type => [UserInterestCreateWithoutTopicInput], {
    nullable: true
  })
  create?: UserInterestCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: UserInterestCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpsertWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  upsert?: UserInterestUpsertWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: UserInterestCreateManyTopicInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserInterestUpdateWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  update?: UserInterestUpdateWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpdateManyWithWhereWithoutTopicInput], {
    nullable: true
  })
  updateMany?: UserInterestUpdateManyWithWhereWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserInterestScalarWhereInput[] | undefined;
}
