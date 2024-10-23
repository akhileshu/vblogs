import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalCountTechnologiesArgs } from "./args/GoalCountTechnologiesArgs";

@TypeGraphQL.ObjectType("GoalCount", {})
export class GoalCount {
  Technologies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Technologies",
    nullable: false
  })
  getTechnologies(@TypeGraphQL.Root() root: GoalCount, @TypeGraphQL.Args() args: GoalCountTechnologiesArgs): number {
    return root.Technologies;
  }
}
