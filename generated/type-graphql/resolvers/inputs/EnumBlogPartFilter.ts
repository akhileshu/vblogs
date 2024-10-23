import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBlogPartFilter } from "../inputs/NestedEnumBlogPartFilter";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.InputType("EnumBlogPartFilter", {})
export class EnumBlogPartFilter {
  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: true
  })
  equals?: "INTRO" | "IMPLEMENTATION" | "ADVANCED" | undefined;

  @TypeGraphQL.Field(_type => [BlogPart], {
    nullable: true
  })
  in?: Array<"INTRO" | "IMPLEMENTATION" | "ADVANCED"> | undefined;

  @TypeGraphQL.Field(_type => [BlogPart], {
    nullable: true
  })
  notIn?: Array<"INTRO" | "IMPLEMENTATION" | "ADVANCED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBlogPartFilter, {
    nullable: true
  })
  not?: NestedEnumBlogPartFilter | undefined;
}
