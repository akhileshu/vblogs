import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

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
}
