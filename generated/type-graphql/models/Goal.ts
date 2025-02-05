import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Technology } from "../models/Technology";
import { GoalCount } from "../resolvers/outputs/GoalCount";

@TypeGraphQL.ObjectType("Goal", {})
export class Goal {
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

  technologies?: Technology[];

  @TypeGraphQL.Field(_type => GoalCount, {
    nullable: true
  })
  _count?: GoalCount | null;
}
