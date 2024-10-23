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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  Topics?: Topic[];

  Goal?: Goal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  goalId?: number | null;

  userInterests?: UserInterest[];

  @TypeGraphQL.Field(_type => TechnologyCount, {
    nullable: true
  })
  _count?: TechnologyCount | null;
}
