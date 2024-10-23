import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateManyGoalInputEnvelope } from "../inputs/TechnologyCreateManyGoalInputEnvelope";
import { TechnologyCreateOrConnectWithoutGoalInput } from "../inputs/TechnologyCreateOrConnectWithoutGoalInput";
import { TechnologyCreateWithoutGoalInput } from "../inputs/TechnologyCreateWithoutGoalInput";
import { TechnologyScalarWhereInput } from "../inputs/TechnologyScalarWhereInput";
import { TechnologyUpdateManyWithWhereWithoutGoalInput } from "../inputs/TechnologyUpdateManyWithWhereWithoutGoalInput";
import { TechnologyUpdateWithWhereUniqueWithoutGoalInput } from "../inputs/TechnologyUpdateWithWhereUniqueWithoutGoalInput";
import { TechnologyUpsertWithWhereUniqueWithoutGoalInput } from "../inputs/TechnologyUpsertWithWhereUniqueWithoutGoalInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyUpdateManyWithoutGoalNestedInput", {})
export class TechnologyUpdateManyWithoutGoalNestedInput {
  @TypeGraphQL.Field(_type => [TechnologyCreateWithoutGoalInput], {
    nullable: true
  })
  create?: TechnologyCreateWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyCreateOrConnectWithoutGoalInput], {
    nullable: true
  })
  connectOrCreate?: TechnologyCreateOrConnectWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyUpsertWithWhereUniqueWithoutGoalInput], {
    nullable: true
  })
  upsert?: TechnologyUpsertWithWhereUniqueWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => TechnologyCreateManyGoalInputEnvelope, {
    nullable: true
  })
  createMany?: TechnologyCreateManyGoalInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereUniqueInput], {
    nullable: true
  })
  set?: TechnologyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TechnologyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereUniqueInput], {
    nullable: true
  })
  delete?: TechnologyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereUniqueInput], {
    nullable: true
  })
  connect?: TechnologyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyUpdateWithWhereUniqueWithoutGoalInput], {
    nullable: true
  })
  update?: TechnologyUpdateWithWhereUniqueWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyUpdateManyWithWhereWithoutGoalInput], {
    nullable: true
  })
  updateMany?: TechnologyUpdateManyWithWhereWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TechnologyScalarWhereInput[] | undefined;
}
