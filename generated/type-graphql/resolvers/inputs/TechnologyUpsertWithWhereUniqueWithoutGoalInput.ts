import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateWithoutGoalInput } from "../inputs/TechnologyCreateWithoutGoalInput";
import { TechnologyUpdateWithoutGoalInput } from "../inputs/TechnologyUpdateWithoutGoalInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyUpsertWithWhereUniqueWithoutGoalInput", {})
export class TechnologyUpsertWithWhereUniqueWithoutGoalInput {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechnologyUpdateWithoutGoalInput, {
    nullable: false
  })
  update!: TechnologyUpdateWithoutGoalInput;

  @TypeGraphQL.Field(_type => TechnologyCreateWithoutGoalInput, {
    nullable: false
  })
  create!: TechnologyCreateWithoutGoalInput;
}
