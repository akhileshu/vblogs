import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicAvgAggregate } from "../outputs/TopicAvgAggregate";
import { TopicCountAggregate } from "../outputs/TopicCountAggregate";
import { TopicMaxAggregate } from "../outputs/TopicMaxAggregate";
import { TopicMinAggregate } from "../outputs/TopicMinAggregate";
import { TopicSumAggregate } from "../outputs/TopicSumAggregate";

@TypeGraphQL.ObjectType("TopicGroupBy", {})
export class TopicGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  technologyId!: number | null;

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
