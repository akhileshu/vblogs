import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalUpdateInput } from "../../../inputs/GoalUpdateInput";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGoalArgs {
  @TypeGraphQL.Field(_type => GoalUpdateInput, {
    nullable: false
  })
  data!: GoalUpdateInput;

  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: false
  })
  where!: GoalWhereUniqueInput;
}
