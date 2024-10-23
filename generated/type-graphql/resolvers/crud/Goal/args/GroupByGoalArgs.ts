import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalOrderByWithAggregationInput } from "../../../inputs/GoalOrderByWithAggregationInput";
import { GoalScalarWhereWithAggregatesInput } from "../../../inputs/GoalScalarWhereWithAggregatesInput";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";
import { GoalScalarFieldEnum } from "../../../../enums/GoalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGoalArgs {
  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  where?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GoalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GoalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title">;

  @TypeGraphQL.Field(_type => GoalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GoalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
