import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalCreateInput } from "../../../inputs/GoalCreateInput";
import { GoalUpdateInput } from "../../../inputs/GoalUpdateInput";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGoalArgs {
  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: false
  })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(_type => GoalCreateInput, {
    nullable: false
  })
  create!: GoalCreateInput;

  @TypeGraphQL.Field(_type => GoalUpdateInput, {
    nullable: false
  })
  update!: GoalUpdateInput;
}
