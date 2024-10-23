import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.InputType("VideoSectionCreateManyVideoInput", {})
export class VideoSectionCreateManyVideoInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

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
