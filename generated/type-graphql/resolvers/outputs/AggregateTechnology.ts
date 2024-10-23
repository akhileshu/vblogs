import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyAvgAggregate } from "../outputs/TechnologyAvgAggregate";
import { TechnologyCountAggregate } from "../outputs/TechnologyCountAggregate";
import { TechnologyMaxAggregate } from "../outputs/TechnologyMaxAggregate";
import { TechnologyMinAggregate } from "../outputs/TechnologyMinAggregate";
import { TechnologySumAggregate } from "../outputs/TechnologySumAggregate";

@TypeGraphQL.ObjectType("AggregateTechnology", {})
export class AggregateTechnology {
  @TypeGraphQL.Field(_type => TechnologyCountAggregate, {
    nullable: true
  })
  _count!: TechnologyCountAggregate | null;

  @TypeGraphQL.Field(_type => TechnologyAvgAggregate, {
    nullable: true
  })
  _avg!: TechnologyAvgAggregate | null;

  @TypeGraphQL.Field(_type => TechnologySumAggregate, {
    nullable: true
  })
  _sum!: TechnologySumAggregate | null;

  @TypeGraphQL.Field(_type => TechnologyMinAggregate, {
    nullable: true
  })
  _min!: TechnologyMinAggregate | null;

  @TypeGraphQL.Field(_type => TechnologyMaxAggregate, {
    nullable: true
  })
  _max!: TechnologyMaxAggregate | null;
}
