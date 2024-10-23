import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalAvgAggregate } from "../outputs/GoalAvgAggregate";
import { GoalCountAggregate } from "../outputs/GoalCountAggregate";
import { GoalMaxAggregate } from "../outputs/GoalMaxAggregate";
import { GoalMinAggregate } from "../outputs/GoalMinAggregate";
import { GoalSumAggregate } from "../outputs/GoalSumAggregate";

@TypeGraphQL.ObjectType("GoalGroupBy", {})
export class GoalGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

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
