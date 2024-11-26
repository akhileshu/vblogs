import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TagsOnBlogsScalarWhereInput", {})
export class TagsOnBlogsScalarWhereInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereInput], {
    nullable: true
  })
  AND?: TagsOnBlogsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereInput], {
    nullable: true
  })
  OR?: TagsOnBlogsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereInput], {
    nullable: true
  })
  NOT?: TagsOnBlogsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  blogId?: StringFilter | undefined;
}
