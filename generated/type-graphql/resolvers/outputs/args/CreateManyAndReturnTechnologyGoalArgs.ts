import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalWhereInput } from "../../inputs/GoalWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTechnologyGoalArgs {
  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  where?: GoalWhereInput | undefined;
}
