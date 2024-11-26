import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCountAggregate } from "../outputs/GoalCountAggregate";
import { GoalMaxAggregate } from "../outputs/GoalMaxAggregate";
import { GoalMinAggregate } from "../outputs/GoalMinAggregate";

@TypeGraphQL.ObjectType("GoalGroupBy", {})
export class GoalGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  @TypeGraphQL.Field(_type => GoalMinAggregate, {
    nullable: true
  })
  _min!: GoalMinAggregate | null;

  @TypeGraphQL.Field(_type => GoalMaxAggregate, {
    nullable: true
  })
  _max!: GoalMaxAggregate | null;
}
