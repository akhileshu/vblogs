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

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technologyId?: string | null;

  Technology?: Technology | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  topicId?: string | null;

  Topic?: Topic | null;

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: false
  })
  interestType!: "TECHNOLOGY" | "TOPIC";
}
