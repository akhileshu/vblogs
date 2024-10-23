import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Technology } from "../models/Technology";
import { Topic } from "../models/Topic";
import { User } from "../models/User";
import { InterestType } from "../enums/InterestType";

@TypeGraphQL.ObjectType("UserInterest", {})
export class UserInterest {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  technologyId?: number | null;

  Technology?: Technology | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  topicId?: number | null;

  Topic?: Topic | null;

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: false
  })
  interestType!: "TECHNOLOGY" | "TOPIC";
}
