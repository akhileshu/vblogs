import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyTechnologyInputEnvelope } from "../inputs/TopicCreateManyTechnologyInputEnvelope";
import { TopicCreateOrConnectWithoutTechnologyInput } from "../inputs/TopicCreateOrConnectWithoutTechnologyInput";
import { TopicCreateWithoutTechnologyInput } from "../inputs/TopicCreateWithoutTechnologyInput";
import { TopicScalarWhereInput } from "../inputs/TopicScalarWhereInput";
import { TopicUpdateManyWithWhereWithoutTechnologyInput } from "../inputs/TopicUpdateManyWithWhereWithoutTechnologyInput";
import { TopicUpdateWithWhereUniqueWithoutTechnologyInput } from "../inputs/TopicUpdateWithWhereUniqueWithoutTechnologyInput";
import { TopicUpsertWithWhereUniqueWithoutTechnologyInput } from "../inputs/TopicUpsertWithWhereUniqueWithoutTechnologyInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateManyWithoutTechnologyNestedInput", {})
export class TopicUpdateManyWithoutTechnologyNestedInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutTechnologyInput], {
    nullable: true
  })
  create?: TopicCreateWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutTechnologyInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpsertWithWhereUniqueWithoutTechnologyInput], {
    nullable: true
  })
  upsert?: TopicUpsertWithWhereUniqueWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyTechnologyInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyTechnologyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  set?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  delete?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateWithWhereUniqueWithoutTechnologyInput], {
    nullable: true
  })
  update?: TopicUpdateWithWhereUniqueWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateManyWithWhereWithoutTechnologyInput], {
    nullable: true
  })
  updateMany?: TopicUpdateManyWithWhereWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TopicScalarWhereInput[] | undefined;
}
