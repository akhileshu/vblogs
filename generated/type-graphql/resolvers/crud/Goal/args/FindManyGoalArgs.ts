import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GoalOrderByWithRelationInput } from "../../../inputs/GoalOrderByWithRelationInput";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";
import { GoalScalarFieldEnum } from "../../../../enums/GoalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyGoalArgs {
  @TypeGraphQL.Field(_type => GoalWhereInput, {
    nullable: true
  })
  where?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GoalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GoalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GoalWhereUniqueInput, {
    nullable: true
  })
  cursor?: GoalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GoalScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "title"> | undefined;
}
