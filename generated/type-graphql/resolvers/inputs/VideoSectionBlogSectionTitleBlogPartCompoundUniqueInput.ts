import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.InputType("VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput", {})
export class VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogSectionTitle!: string;

  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: false
  })
  blogPart!: "INTRO" | "IMPLEMENTATION" | "ADVANCED";
}
