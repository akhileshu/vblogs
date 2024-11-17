import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicAvgAggregate } from "../outputs/TopicAvgAggregate";
import { TopicCountAggregate } from "../outputs/TopicCountAggregate";
import { TopicMaxAggregate } from "../outputs/TopicMaxAggregate";
import { TopicMinAggregate } from "../outputs/TopicMinAggregate";
import { TopicSumAggregate } from "../outputs/TopicSumAggregate";

@TypeGraphQL.ObjectType("AggregateTopic", {})
export class AggregateTopic {
  @TypeGraphQL.Field(_type => TopicCountAggregate, {
    nullable: true
  })
  _count!: TopicCountAggregate | null;

  @TypeGraphQL.Field(_type => TopicAvgAggregate, {
    nullable: true
  })
  _avg!: TopicAvgAggregate | null;

  @TypeGraphQL.Field(_type => TopicSumAggregate, {
    nullable: true
  })
  _sum!: TopicSumAggregate | null;

  @TypeGraphQL.Field(_type => TopicMinAggregate, {
    nullable: true
  })
  _min!: TopicMinAggregate | null;

  @TypeGraphQL.Field(_type => TopicMaxAggregate, {
    nullable: true
  })
  _max!: TopicMaxAggregate | null;
}