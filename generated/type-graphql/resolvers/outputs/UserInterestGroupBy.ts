import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCountAggregate } from "../outputs/UserInterestCountAggregate";
import { UserInterestMaxAggregate } from "../outputs/UserInterestMaxAggregate";
import { UserInterestMinAggregate } from "../outputs/UserInterestMinAggregate";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.ObjectType("UserInterestGroupBy", {})
export class UserInterestGroupBy {
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
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technologyId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  topicId!: string | null;

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: false
  })
  interestType!: "TECHNOLOGY" | "TOPIC";

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
