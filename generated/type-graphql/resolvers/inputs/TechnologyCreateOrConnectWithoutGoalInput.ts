import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateWithoutGoalInput } from "../inputs/TechnologyCreateWithoutGoalInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyCreateOrConnectWithoutGoalInput", {})
export class TechnologyCreateOrConnectWithoutGoalInput {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechnologyCreateWithoutGoalInput, {
    nullable: false
  })
  create!: TechnologyCreateWithoutGoalInput;
}
