import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Video } from "../models/Video";
import { BlogPart } from "../enums/BlogPart";

@TypeGraphQL.ObjectType("VideoSection", {})
export class VideoSection {
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

  Video?: Video;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  videoId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogSectionTitle!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timestampInSeconds!: number;

  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: false
  })
  blogPart!: "INTRO" | "IMPLEMENTATION" | "ADVANCED";
}
