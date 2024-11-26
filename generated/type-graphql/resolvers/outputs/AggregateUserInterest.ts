import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCountAggregate } from "../outputs/UserInterestCountAggregate";
import { UserInterestMaxAggregate } from "../outputs/UserInterestMaxAggregate";
import { UserInterestMinAggregate } from "../outputs/UserInterestMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserInterest", {})
export class AggregateUserInterest {
  @TypeGraphQL.Field(_type => UserInterestCountAggregate, {
    nullable: true
  })
  _count!: UserInterestCountAggregate | null;

  @TypeGraphQL.Field(_type => UserInterestMinAggregate, {
    nullable: true
  })
  _min!: UserInterestMinAggregate | null;

  @TypeGraphQL.Field(_type => UserInterestMaxAggregate, {
    nullable: true
  })
  _max!: UserInterestMaxAggregate | null;
}
