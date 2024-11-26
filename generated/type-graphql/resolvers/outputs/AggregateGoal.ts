import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCountAggregate } from "../outputs/GoalCountAggregate";
import { GoalMaxAggregate } from "../outputs/GoalMaxAggregate";
import { GoalMinAggregate } from "../outputs/GoalMinAggregate";

@TypeGraphQL.ObjectType("AggregateGoal", {})
export class AggregateGoal {
  @TypeGraphQL.Field(_type => GoalCountAggregate, {
    nullable: true
  })
  _count!: GoalCountAggregate | null;

  @TypeGraphQL.Field(_type => GoalMinAggregate, {
    nullable: true
  })
  _min!: GoalMinAggregate | null;

  @TypeGraphQL.Field(_type => GoalMaxAggregate, {
    nullable: true
  })
  _max!: GoalMaxAggregate | null;
}
