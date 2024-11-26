import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnTechnologyGoalArgs } from "./args/CreateManyAndReturnTechnologyGoalArgs";
import { Goal } from "../../models/Goal";

@TypeGraphQL.ObjectType("CreateManyAndReturnTechnology", {})
export class CreateManyAndReturnTechnology {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goalId!: string | null;

  Goal!: Goal | null;

  @TypeGraphQL.Field(_type => Goal, {
    name: "Goal",
    nullable: true
  })
  getGoal(@TypeGraphQL.Root() root: CreateManyAndReturnTechnology, @TypeGraphQL.Args() args: CreateManyAndReturnTechnologyGoalArgs): Goal | null {
    return root.Goal;
  }
}
