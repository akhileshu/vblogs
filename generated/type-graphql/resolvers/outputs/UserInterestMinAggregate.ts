import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.ObjectType("UserInterestMinAggregate", {})
export class UserInterestMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technologyId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  topicId!: string | null;

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: true
  })
  interestType!: "TECHNOLOGY" | "TOPIC" | null;
}
