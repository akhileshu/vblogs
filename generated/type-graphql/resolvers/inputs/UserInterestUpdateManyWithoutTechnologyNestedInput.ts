import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyTechnologyInputEnvelope } from "../inputs/UserInterestCreateManyTechnologyInputEnvelope";
import { UserInterestCreateOrConnectWithoutTechnologyInput } from "../inputs/UserInterestCreateOrConnectWithoutTechnologyInput";
import { UserInterestCreateWithoutTechnologyInput } from "../inputs/UserInterestCreateWithoutTechnologyInput";
import { UserInterestScalarWhereInput } from "../inputs/UserInterestScalarWhereInput";
import { UserInterestUpdateManyWithWhereWithoutTechnologyInput } from "../inputs/UserInterestUpdateManyWithWhereWithoutTechnologyInput";
import { UserInterestUpdateWithWhereUniqueWithoutTechnologyInput } from "../inputs/UserInterestUpdateWithWhereUniqueWithoutTechnologyInput";
import { UserInterestUpsertWithWhereUniqueWithoutTechnologyInput } from "../inputs/UserInterestUpsertWithWhereUniqueWithoutTechnologyInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpdateManyWithoutTechnologyNestedInput", {})
export class UserInterestUpdateManyWithoutTechnologyNestedInput {
  @TypeGraphQL.Field(_type => [UserInterestCreateWithoutTechnologyInput], {
    nullable: true
  })
  create?: UserInterestCreateWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestCreateOrConnectWithoutTechnologyInput], {
    nullable: true
  })
  connectOrCreate?: UserInterestCreateOrConnectWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpsertWithWhereUniqueWithoutTechnologyInput], {
    nullable: true
  })
  upsert?: UserInterestUpsertWithWhereUniqueWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateManyTechnologyInputEnvelope, {
    nullable: true
  })
  createMany?: UserInterestCreateManyTechnologyInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserInterestUpdateWithWhereUniqueWithoutTechnologyInput], {
    nullable: true
  })
  update?: UserInterestUpdateWithWhereUniqueWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestUpdateManyWithWhereWithoutTechnologyInput], {
    nullable: true
  })
  updateMany?: UserInterestUpdateManyWithWhereWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserInterestScalarWhereInput[] | undefined;
}
