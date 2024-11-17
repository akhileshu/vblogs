import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGoalArgs {
  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: false
  })
  where!: GoalWhereUniqueInput;
}