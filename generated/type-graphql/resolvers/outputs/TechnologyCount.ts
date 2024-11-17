import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCountTopicsArgs } from "./args/TechnologyCountTopicsArgs";
import { TechnologyCountUserInterestsArgs } from "./args/TechnologyCountUserInterestsArgs";

@TypeGraphQL.ObjectType("TechnologyCount", {})
export class TechnologyCount {
  Topics!: number;
  userInterests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Topics",
    nullable: false
  })
  getTopics(@TypeGraphQL.Root() root: TechnologyCount, @TypeGraphQL.Args() args: TechnologyCountTopicsArgs): number {
    return root.Topics;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "userInterests",
    nullable: false
  })
  getUserInterests(@TypeGraphQL.Root() root: TechnologyCount, @TypeGraphQL.Args() args: TechnologyCountUserInterestsArgs): number {
    return root.userInterests;
  }
}