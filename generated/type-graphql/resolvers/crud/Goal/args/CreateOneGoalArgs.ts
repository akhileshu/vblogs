import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalCreateInput } from "../../../inputs/GoalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGoalArgs {
  @TypeGraphQL.Field(_type => GoalCreateInput, {
    nullable: false
  })
  data!: GoalCreateInput;
}
