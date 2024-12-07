import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Goal } from "../models/Goal";
import { Topic } from "../models/Topic";
import { UserInterest } from "../models/UserInterest";
import { TechnologyCount } from "../resolvers/outputs/TechnologyCount";

@TypeGraphQL.ObjectType("Technology", {})
export class Technology {
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
  title!: string;

  topics?: Topic[];

  goal?: Goal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goalId?: string | null;

  userInterests?: UserInterest[];

  @TypeGraphQL.Field(_type => TechnologyCount, {
    nullable: true
  })
  _count?: TechnologyCount | null;
}
