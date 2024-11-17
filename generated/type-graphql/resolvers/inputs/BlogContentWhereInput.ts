import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogRelationFilter } from "../inputs/BlogRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";

@TypeGraphQL.InputType("BlogContentWhereInput", {})
export class BlogContentWhereInput {
  @TypeGraphQL.Field(_type => [BlogContentWhereInput], {
    nullable: true
  })
  AND?: BlogContentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogContentWhereInput], {
    nullable: true
  })
  OR?: BlogContentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogContentWhereInput], {
    nullable: true
  })
  NOT?: BlogContentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  intro?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  implementation?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  advanced?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  blogId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BlogRelationFilter, {
    nullable: true
  })
  Blog?: BlogRelationFilter | undefined;
}