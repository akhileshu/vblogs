import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalAvgAggregate } from "../outputs/GoalAvgAggregate";
import { GoalCountAggregate } from "../outputs/GoalCountAggregate";
import { GoalMaxAggregate } from "../outputs/GoalMaxAggregate";
import { GoalMinAggregate } from "../outputs/GoalMinAggregate";
import { GoalSumAggregate } from "../outputs/GoalSumAggregate";

@TypeGraphQL.ObjectType("AggregateGoal", {})
export class AggregateGoal {
  @TypeGraphQL.Field(_type => GoalCountAggregate, {
    nullable: true
  })
  _count!: GoalCountAggregate | null;

  @TypeGraphQL.Field(_type => GoalAvgAggregate, {
    nullable: true
  })
  _avg!: GoalAvgAggregate | null;

  @TypeGraphQL.Field(_type => GoalSumAggregate, {
    nullable: true
  })
  _sum!: GoalSumAggregate | null;

  @TypeGraphQL.Field(_type => GoalMinAggregate, {
    nullable: true
  })
  _min!: GoalMinAggregate | null;

  @TypeGraphQL.Field(_type => GoalMaxAggregate, {
    nullable: true
  })
  _max!: GoalMaxAggregate | null;
}
