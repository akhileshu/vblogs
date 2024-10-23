import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogRelationFilter } from "../inputs/BlogRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("TagsOnBlogsWhereInput", {})
export class TagsOnBlogsWhereInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereInput], {
    nullable: true
  })
  AND?: TagsOnBlogsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereInput], {
    nullable: true
  })
  OR?: TagsOnBlogsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereInput], {
    nullable: true
  })
  NOT?: TagsOnBlogsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  blogId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  Tag?: TagRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlogRelationFilter, {
    nullable: true
  })
  Blog?: BlogRelationFilter | undefined;
}
