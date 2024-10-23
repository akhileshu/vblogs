import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateManyGoalInput } from "../inputs/TechnologyCreateManyGoalInput";

@TypeGraphQL.InputType("TechnologyCreateManyGoalInputEnvelope", {})
export class TechnologyCreateManyGoalInputEnvelope {
  @TypeGraphQL.Field(_type => [TechnologyCreateManyGoalInput], {
    nullable: false
  })
  data!: TechnologyCreateManyGoalInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
