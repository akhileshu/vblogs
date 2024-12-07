import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnUserInterestTechnologyArgs } from "./args/CreateManyAndReturnUserInterestTechnologyArgs";
import { CreateManyAndReturnUserInterestTopicArgs } from "./args/CreateManyAndReturnUserInterestTopicArgs";
import { Technology } from "../../models/Technology";
import { Topic } from "../../models/Topic";
import { User } from "../../models/User";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.ObjectType("CreateManyAndReturnUserInterest", {})
export class CreateManyAndReturnUserInterest {
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

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;

  technology!: Technology | null;
  topic!: Topic | null;

  @TypeGraphQL.Field(_type => Technology, {
    name: "technology",
    nullable: true
  })
  getTechnology(@TypeGraphQL.Root() root: CreateManyAndReturnUserInterest, @TypeGraphQL.Args() args: CreateManyAndReturnUserInterestTechnologyArgs): Technology | null {
    return root.technology;
  }

  @TypeGraphQL.Field(_type => Topic, {
    name: "topic",
    nullable: true
  })
  getTopic(@TypeGraphQL.Root() root: CreateManyAndReturnUserInterest, @TypeGraphQL.Args() args: CreateManyAndReturnUserInterestTopicArgs): Topic | null {
    return root.topic;
  }
}
