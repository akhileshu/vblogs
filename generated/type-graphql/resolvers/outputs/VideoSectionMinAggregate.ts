import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.ObjectType("VideoSectionMinAggregate", {})
export class VideoSectionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  videoId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  blogSectionTitle!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  timestampInSeconds!: number | null;

  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: true
  })
  blogPart!: "INTRO" | "IMPLEMENTATION" | "ADVANCED" | null;
}
