import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBlogPartFilter } from "../inputs/NestedEnumBlogPartFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.InputType("NestedEnumBlogPartWithAggregatesFilter", {})
export class NestedEnumBlogPartWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBlogPartWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBlogPartWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBlogPartFilter, {
    nullable: true
  })
  _min?: NestedEnumBlogPartFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBlogPartFilter, {
    nullable: true
  })
  _max?: NestedEnumBlogPartFilter | undefined;
}
