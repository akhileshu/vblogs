import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyUpdateWithoutGoalInput } from "../inputs/TechnologyUpdateWithoutGoalInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyUpdateWithWhereUniqueWithoutGoalInput", {})
export class TechnologyUpdateWithWhereUniqueWithoutGoalInput {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechnologyUpdateWithoutGoalInput, {
    nullable: false
  })
  data!: TechnologyUpdateWithoutGoalInput;
}
