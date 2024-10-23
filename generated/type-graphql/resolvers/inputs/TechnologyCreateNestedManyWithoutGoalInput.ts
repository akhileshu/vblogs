import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateManyGoalInputEnvelope } from "../inputs/TechnologyCreateManyGoalInputEnvelope";
import { TechnologyCreateOrConnectWithoutGoalInput } from "../inputs/TechnologyCreateOrConnectWithoutGoalInput";
import { TechnologyCreateWithoutGoalInput } from "../inputs/TechnologyCreateWithoutGoalInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyCreateNestedManyWithoutGoalInput", {})
export class TechnologyCreateNestedManyWithoutGoalInput {
  @TypeGraphQL.Field(_type => [TechnologyCreateWithoutGoalInput], {
    nullable: true
  })
  create?: TechnologyCreateWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyCreateOrConnectWithoutGoalInput], {
    nullable: true
  })
  connectOrCreate?: TechnologyCreateOrConnectWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(_type => TechnologyCreateManyGoalInputEnvelope, {
    nullable: true
  })
  createMany?: TechnologyCreateManyGoalInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TechnologyWhereUniqueInput], {
    nullable: true
  })
  connect?: TechnologyWhereUniqueInput[] | undefined;
}
