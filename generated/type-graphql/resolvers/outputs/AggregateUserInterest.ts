import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestAvgAggregate } from "../outputs/UserInterestAvgAggregate";
import { UserInterestCountAggregate } from "../outputs/UserInterestCountAggregate";
import { UserInterestMaxAggregate } from "../outputs/UserInterestMaxAggregate";
import { UserInterestMinAggregate } from "../outputs/UserInterestMinAggregate";
import { UserInterestSumAggregate } from "../outputs/UserInterestSumAggregate";

@TypeGraphQL.ObjectType("AggregateUserInterest", {})
export class AggregateUserInterest {
  @TypeGraphQL.Field(_type => UserInterestCountAggregate, {
    nullable: true
  })
  _count!: UserInterestCountAggregate | null;

  @TypeGraphQL.Field(_type => UserInterestAvgAggregate, {
    nullable: true
  })
  _avg!: UserInterestAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserInterestSumAggregate, {
    nullable: true
  })
  _sum!: UserInterestSumAggregate | null;

  @TypeGraphQL.Field(_type => UserInterestMinAggregate, {
    nullable: true
  })
  _min!: UserInterestMinAggregate | null;

  @TypeGraphQL.Field(_type => UserInterestMaxAggregate, {
    nullable: true
  })
  _max!: UserInterestMaxAggregate | null;
}
