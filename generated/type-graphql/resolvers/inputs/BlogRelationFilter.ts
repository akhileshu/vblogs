import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogRelationFilter", {})
export class BlogRelationFilter {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  is?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  isNot?: BlogWhereInput | undefined;
}
