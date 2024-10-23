import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentWhereInput } from "../inputs/BlogContentWhereInput";

@TypeGraphQL.InputType("BlogContentNullableRelationFilter", {})
export class BlogContentNullableRelationFilter {
  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  is?: BlogContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  isNot?: BlogContentWhereInput | undefined;
}
