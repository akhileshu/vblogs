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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  technologyId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  topicId!: number | null;

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: false
  })
  interestType!: "TECHNOLOGY" | "TOPIC";

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;

  Technology!: Technology | null;
  Topic!: Topic | null;

  @TypeGraphQL.Field(_type => Technology, {
    name: "Technology",
    nullable: true
  })
  getTechnology(@TypeGraphQL.Root() root: CreateManyAndReturnUserInterest, @TypeGraphQL.Args() args: CreateManyAndReturnUserInterestTechnologyArgs): Technology | null {
    return root.Technology;
  }

  @TypeGraphQL.Field(_type => Topic, {
    name: "Topic",
    nullable: true
  })
  getTopic(@TypeGraphQL.Root() root: CreateManyAndReturnUserInterest, @TypeGraphQL.Args() args: CreateManyAndReturnUserInterestTopicArgs): Topic | null {
    return root.Topic;
  }
}
